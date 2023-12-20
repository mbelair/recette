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
  protected ingredient: IngredientRecette = new IngredientRecette();
  protected recette: Recette;

  protected categorieIngredient: CategorieIngredient[] = [];

  filteredIngredients: Observable<Ingredient[]>;

  ingredientCtrl = new FormControl('', [Validators.required]);
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


  readonly UNITE_GROUP = UniteMesure.UNITE_GROUP;

  constructor(
    public dialogRef: MatDialogRef<CreateRecetteAddIngredientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: { recette: Recette },
    public dialog: MatDialog,
    private appService: AppService
  ) {

    this.recette = data.recette;

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

  onCancelClick(): void {
    this.dialogRef.close(null);
  }
  onOkClick(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.categorieIngredient.map(ci => {
      if (!this.recette.categorieIngredient.some(rci => rci.id === ci.id)) {
        this.recette.categorieIngredient.push(ci);
      }
    })

    const chosenCategory = this.recette.categorieIngredient.find(ci => ci.id === this.categoryCtrl.getRawValue());
    this.ingredient.ordre = chosenCategory.ingredient.length;
    this.ingredient.id = 1 + this.recette.categorieIngredient.reduce((accumulator, currentValue) => {
      return Math.max(accumulator, currentValue.ingredient.reduce((accumulator2, currentValue2) => {
        return Math.max(accumulator2, currentValue2.id);
      }, -1));
    }, -1);
    this.ingredient.ingredient = typeof this.ingredientCtrl.value === 'string' ? null : (this.ingredientCtrl.value as Ingredient);
    this.ingredient.detail = this.detailCtrl.value;
    this.ingredient.quantite = this.quantiteCtrl.value;
    this.ingredient.unite = this.uniteCtrl.value;
    this.recette.categorieIngredient.find(ci => ci.id === this.categoryCtrl.getRawValue()).ingredient.push(this.ingredient);
    this.dialogRef.close();
  }

  openAddCategoryDialog() {
    const dialogRef = this.dialog.open(CreateRecetteAddCategoryDialogComponent, {
    });

    dialogRef.afterClosed().subscribe((result: CategorieIngredient) => {
      result.ordre = this.categorieIngredient.length;
      result.id = 1 + this.categorieIngredient.reduce((accumulator, currentValue) => {
        return Math.max(accumulator, currentValue.id);
      }, -1);
      this.categorieIngredient.push(result);
      this.categoryCtrl.setValue(result.id);
    });
  }

  openAddIngredientDialog() {
    const dialogRef = this.dialog.open(CreateIngredientComponent, {

    });
  }
}


