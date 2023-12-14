import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Observable, map, startWith } from 'rxjs';
import { Ingredient } from '../models/ingredient';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-recette-add-ingredient-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatAutocompleteModule, CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatDialogModule, MatButtonModule],
  templateUrl: './create-recette-add-ingredient-dialog.component.html',
  styleUrl: './create-recette-add-ingredient-dialog.component.scss'
})
export class CreateRecetteAddIngredientDialogComponent {
  protected data: Ingredient = new Ingredient();
  filteredIngredients: Observable<string[]>;
  inputCtrl = new FormControl('');
  ingredients: string[] = [];
  allIngredients: string[] = ['Pomme', 'Citron', 'Lime', 'Orange', 'Fraise'];

  constructor(public dialogRef: MatDialogRef<CreateRecetteAddIngredientDialogComponent>) {
    this.filteredIngredients = this.inputCtrl.valueChanges.pipe(
      startWith(null),
      map((ingredient: string | null) => (ingredient ? this._filter(ingredient) : this.allIngredients.slice())),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allIngredients.filter(ingredient => ingredient.toLowerCase().includes(filterValue));
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}


