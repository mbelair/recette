import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Observable, map, startWith } from 'rxjs';
import { IngredientRecette } from '../models/ingredientRecette';
import { MatButtonModule } from '@angular/material/button';
import { Recette } from '../models/recette';
import { CreateRecetteAddCategoryDialogComponent } from '../create-recette-add-category-dialog/create-recette-add-category-dialog.component';
import { CategorieIngredient } from '../models/categorieIngredient';
import { MatIconModule } from '@angular/material/icon';
import { UniteMesure } from '../models/uniteMesure';
import { CreateIngredientComponent } from '../create-ingredient/create-ingredient.component';

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

  filteredIngredients: Observable<string[]>;
  inputCtrl = new FormControl('', [Validators.required]);
  ingredients: string[] = [];
  allIngredients: string[] = ['Pomme', 'Citron', 'Lime', 'Orange', 'Fraise'];


  category = new FormControl(0);

  readonly UNITE_GROUP = UniteMesure.UNITE_GROUP;

  constructor(
    public dialogRef: MatDialogRef<CreateRecetteAddIngredientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: { recette: Recette },
    public dialog: MatDialog
  ) {
    this.filteredIngredients = this.inputCtrl.valueChanges.pipe(
      startWith(null),
      map((i: string | null) => (i ? this._filter(i) : this.allIngredients.slice())),
    );
    this.recette = data.recette;

    this.categorieIngredient = [];
    this.recette.categorieIngredient.map(ci => this.categorieIngredient.push(ci));
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allIngredients.filter(ingredient => ingredient.toLowerCase().includes(filterValue));
  }

  onCancelClick(): void {
    this.dialogRef.close(null);
  }
  onOkClick(): void {
    this.categorieIngredient.map(ci => {
      if (!this.recette.categorieIngredient.some(rci => rci.id === ci.id)) {
        this.recette.categorieIngredient.push(ci);
      }
    })

    const chosenCategory = this.recette.categorieIngredient.find(ci => ci.id === this.category.getRawValue());
    this.ingredient.ordre = chosenCategory.ingredient.length;
    this.ingredient.id = 1 + this.recette.categorieIngredient.reduce((accumulator, currentValue) => {
      return Math.max(accumulator, currentValue.ingredient.reduce((accumulator2, currentValue2) => {
        return Math.max(accumulator2, currentValue2.id);
      }, -1));
    }, -1);
    this.ingredient.nom = this.inputCtrl.getRawValue();
    this.recette.categorieIngredient.find(ci => ci.id === this.category.getRawValue()).ingredient.push(this.ingredient);
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
      this.category.setValue(result.id);
    });
  }

  openAddIngredientDialog() {
    const dialogRef = this.dialog.open(CreateIngredientComponent, {

    });
  }
}


