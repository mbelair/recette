import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { Observable, debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs';
import { AppService } from '../app.service';
import { CreateRecetteAddIngredientDialogComponent } from '../create-recette-add-ingredient-dialog/create-recette-add-ingredient-dialog.component';
import { CreateRecetteAddPreparationDialogComponentComponent } from '../create-recette-add-preparation-dialog-component/create-recette-add-preparation-dialog-component.component';
import { GenericDeleteDialogComponent } from '../generic-delete-dialog/generic-delete-dialog.component';
import { IngredientRecette } from '../models/ingredientRecette';
import { Preparation } from '../models/preparation';
import { Recette } from '../models/recette';
import { Tag } from '../models/tag';
import { TypeRepas } from '../models/typeRepas';
import { UniteMesure } from '../models/uniteMesure';

@Component({
  selector: 'app-create-recette',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatChipsModule, MatSelectModule, MatListModule, FormsModule, MatAutocompleteModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatIconModule, MatDialogModule, CreateRecetteAddIngredientDialogComponent],
  templateUrl: './create-recette.component.html',
  styleUrl: './create-recette.component.scss'
})
export class CreateRecetteComponent implements OnInit {
  allMealTypes = TypeRepas.ALL;
  id: number = -1;
  protected recette: Recette = new Recette(true);

  filteredTags: Observable<Tag[]>;
  tagsCtrl = new FormControl(null, []);
  tags: Tag[] = [];
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  constructor(public dialog: MatDialog, private appService: AppService, private route: ActivatedRoute) {
    this.filteredTags = this.tagsCtrl.valueChanges.pipe(
      startWith(null),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm: string | Tag) => {
        const nom = typeof searchTerm === 'string' ? searchTerm : searchTerm?.nom;
        return this.appService.getAllTags(nom)
      }),
    );
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.appService.getRecette(this.id).subscribe({
          next: (recette: Recette) => {
            this.recette = recette;
            this.tags = this.recette.tags;
          }
        });
      }
    });
  }

  displayFn(i: Tag): string {
    return i && i.nom ? i.nom : '';
  }

  openAddIngredientDialog() {
    this.dialog.open(CreateRecetteAddIngredientDialogComponent, {
      data: {
        recette: this.recette,
        ingredient: null
      },
    });
  }

  getUnitLabel(ingredient: IngredientRecette): string {
    return UniteMesure.fromTypeCode(ingredient.unite).getFormatedLabel(ingredient.quantite > 1);
  }

  openEditIngredientDialog(ingredient: IngredientRecette) {
    this.dialog.open(CreateRecetteAddIngredientDialogComponent, {
      data: {
        recette: this.recette,
        ingredient: ingredient
      },
    });
  }

  openDeleteIngredientDialog(ingredient: IngredientRecette) {
    const dialogRef = this.dialog.open(GenericDeleteDialogComponent, {
      data: {
        title: "Supprimer un ingrédient"
      },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        const category = this.recette.categorieIngredient.find(ci => ci.ingredient.includes(ingredient));
        category.ingredient.splice(category.ingredient.indexOf(ingredient), 1);
      }
    });
  }

  openEditPreparationtDialog(preparation: Preparation) {
    this.dialog.open(CreateRecetteAddPreparationDialogComponentComponent, {
      data: {
        recette: this.recette,
        step: preparation
      },
    });
  }

  openDeletePreparationtDialog(preparation: Preparation) {
    const dialogRef = this.dialog.open(GenericDeleteDialogComponent, {
      data: {
        title: "Supprimer une étape"
      },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        const category = this.recette.categoriePreparation.find(ci => ci.preparation.includes(preparation));
        category.preparation.splice(category.preparation.indexOf(preparation), 1);
      }
    });
  }

  openAddPreparationDialog() {
    this.dialog.open(CreateRecetteAddPreparationDialogComponentComponent, {
      data: {
        recette: this.recette,
        step: null
      },
    });
  }

  submit() {
    this.recette.tags = [...new Set(this.tags)];
    if (this.id) {
      this.appService.updateRecette(this.recette).subscribe({
        next: () => {
          alert('YAY!');
        }
      });
    } else {
      this.appService.createRecette(this.recette).subscribe({
        next: () => {
          alert('YAY!');
        }
      });
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    let tag: Tag = this.appService.allTags.value.find(t => t.nom === value);
    if (!tag) {
      tag = new Tag();
      tag.id = -1;
      tag.nom = value;
    }

    // Add our ingredient
    if (value) {
      this.tags.push(tag);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.tagsCtrl.setValue(null);
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.value);
    this.input.nativeElement.value = '';
    this.tagsCtrl.setValue(null);
  }

  get pageTitle(): string {
    if (this.id) {
      return "Modifier une recette";
    } else {
      return "Créer une recette";
    }
  }

  get submitButton(): string {
    if (this.id) {
      return "Modifier";
    } else {
      return "Créer";
    }
  }

}
