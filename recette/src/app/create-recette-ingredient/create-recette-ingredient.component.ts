import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Observable, map, startWith } from 'rxjs';



@Component({
  selector: 'app-create-recette-ingredient',
  standalone: true,
  imports: [MatFormFieldModule, MatAutocompleteModule, CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule],
  templateUrl: './create-recette-ingredient.component.html',
  styleUrl: './create-recette-ingredient.component.scss'
})
export class CreateRecetteIngredientComponent {
  filteredIngredients: Observable<string[]>;
  inputCtrl = new FormControl('');
  ingredients: string[] = [];
  allIngredients: string[] = ['Pomme', 'Citron', 'Lime', 'Orange', 'Fraise'];

  constructor() {
    this.filteredIngredients = this.inputCtrl.valueChanges.pipe(
      startWith(null),
      map((ingredient: string | null) => (ingredient ? this._filter(ingredient) : this.allIngredients.slice())),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allIngredients.filter(ingredient => ingredient.toLowerCase().includes(filterValue));
  }
}


