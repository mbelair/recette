import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Observable, debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs';
import { AppService } from '../app.service';
import { CreateIngredientComponent } from '../create-ingredient/create-ingredient.component';
import { CreateRecetteAddCategoryDialogComponent } from '../create-recette-add-category-dialog/create-recette-add-category-dialog.component';
import { BaseCategorie } from '../models/BaseCategorie';
import { CategorieIngredient } from '../models/categorieIngredient';
import { Ingredient } from '../models/ingredient';
import { IngredientRecette } from '../models/ingredientRecette';
import { Recette } from '../models/recette';
import { UniteMesure } from '../models/uniteMesure';

@Component({
  selector: 'app-create-recette-add-ingredient-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatAutocompleteModule, CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatDialogModule, MatButtonModule, CreateRecetteAddCategoryDialogComponent],
  templateUrl: './create-recette-add-ingredient-dialog.component.html',
  styleUrl: './create-recette-add-ingredient-dialog.component.scss'
})
export class CreateRecetteAddIngredientDialogComponent {
  protected recette: Recette;

  protected categorieIngredient: CategorieIngredient[] = [];

  filteredIngredients: Observable<Ingredient[]>;

  ingredientCtrl = new FormControl(null, [Validators.required]);
  categoryCtrl = new FormControl(0);
  quantiteCtrl = new FormControl<number>(null, [Validators.required]);
  uniteCtrl = new FormControl('', [Validators.required]);
  detailCtrl = new FormControl('');

  form = new FormGroup({
    ingredientCtrl: this.ingredientCtrl,
    categoryCtrl: this.categoryCtrl,
    quantiteCtrl: this.quantiteCtrl,
    uniteCtrl: this.uniteCtrl,
    detailCtrl: this.detailCtrl
  })

  editingIngredient: IngredientRecette = null;
  readonly UNITE_GROUP = UniteMesure.UNITE_GROUP;

  constructor(
    public dialogRef: MatDialogRef<CreateRecetteAddIngredientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: { recette: Recette, ingredient: IngredientRecette },
    public dialog: MatDialog,
    private appService: AppService
  ) {
    this.recette = data.recette;

    if (data.ingredient) {
      const chosenCategory = this.recette.categorieIngredient.find(ci => ci.ingredient.includes(data.ingredient));
      this.ingredientCtrl.setValue(data.ingredient.ingredient);
      this.categoryCtrl.setValue(chosenCategory.id);
      this.quantiteCtrl.setValue(data.ingredient.quantite)
      this.uniteCtrl.setValue(data.ingredient.unite);
      this.detailCtrl.setValue(data.ingredient.detail);
      this.editingIngredient = data.ingredient;
    }


    this.categorieIngredient = [];
    this.recette.categorieIngredient.map(ci => this.categorieIngredient.push(ci));


    this.filteredIngredients = this.ingredientCtrl.valueChanges.pipe(
      startWith(null),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm: string | Ingredient) => {
        const nom = typeof searchTerm === 'string' ? searchTerm : searchTerm?.nom;
        return this.appService.getAllIngredients(nom)
      }),
    );

    this.appService.ingredients.subscribe({
      next: () => {
        this.ingredientCtrl.updateValueAndValidity();
      }
    })
  }

  displayFn(i: Ingredient): string {
    return i && i.nom ? i.nom : '';
  }

  getTitle() {
    if (this.editingIngredient) {
      return "Modifier un ingrédient";
    } else {
      return "Ajouter un ingrédient";
    }
  }

  onCancelClick(): void {
    this.dialogRef.close(null);
  }
  onOkClick(): void {
    if (typeof this.ingredientCtrl.value === 'string') {
      this.ingredientCtrl.setValue('');
    }
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    let ingredient = this.editingIngredient ? this.editingIngredient : new IngredientRecette();

    this.categorieIngredient.map(ci => {
      if (!this.recette.categorieIngredient.some(rci => rci.id === ci.id)) {
        this.recette.categorieIngredient.push(ci);
      }
    })

    const chosenCategory = this.recette.categorieIngredient.find(ci => ci.id === this.categoryCtrl.getRawValue());
    const previousCategory = this.recette.categorieIngredient.find(cp => cp.ingredient.find(p => p.id === ingredient.id));

    ingredient.ingredient = typeof this.ingredientCtrl.value === 'string' ? null : (this.ingredientCtrl.value as Ingredient);
    ingredient.detail = this.detailCtrl.value;
    ingredient.quantite = this.quantiteCtrl.value;
    ingredient.unite = this.uniteCtrl.value;
    if (!this.editingIngredient) {
      ingredient.id = 1 + this.recette.categorieIngredient.reduce((accumulator, currentValue) => {
        return Math.max(accumulator, currentValue.ingredient.reduce((accumulator2, currentValue2) => {
          return Math.max(accumulator2, currentValue2.id);
        }, -1));
      }, -1);
    }

    if (chosenCategory.id !== previousCategory?.id) {
      if (previousCategory) {
        previousCategory.ingredient.splice(previousCategory.ingredient.indexOf(this.editingIngredient), 1);
      }
      ingredient.ordre = chosenCategory.ingredient.length;
      this.recette.categorieIngredient.find(ci => ci.id === this.categoryCtrl.getRawValue()).ingredient.push(ingredient);
    }
    this.dialogRef.close();
  }

  openAddCategoryDialog() {
    const dialogRef = this.dialog.open(CreateRecetteAddCategoryDialogComponent, {
    });

    dialogRef.afterClosed().subscribe((result: BaseCategorie) => {
      result.ordre = this.categorieIngredient.length;
      result.id = 1 + this.categorieIngredient.reduce((accumulator, currentValue) => {
        return Math.max(accumulator, currentValue.id);
      }, -1);
      this.categorieIngredient.push(CategorieIngredient.fromBase(result));
      this.categoryCtrl.setValue(result.id);
    });
  }

  openAddIngredientDialog() {
    const dialogRef = this.dialog.open(CreateIngredientComponent, {

    });
  }
}


