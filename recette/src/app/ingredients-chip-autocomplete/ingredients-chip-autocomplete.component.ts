import { ENTER } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-ingredients-chip-autocomplete',
  standalone: true,
  imports: [MatAutocompleteModule, CommonModule, MatInputModule, ReactiveFormsModule, MatChipsModule, MatIconModule],
  templateUrl: './ingredients-chip-autocomplete.component.html',
  styleUrl: './ingredients-chip-autocomplete.component.scss'
})
export class IngredientsChipAutocompleteComponent {
  separatorKeysCodes: number[] = [ENTER];

  inputCtrl = new FormControl('');
  filteredIngredients: Observable<string[]>;
  ingredients: string[] = [];
  allIngredients: string[] = ['Pomme', 'Citron', 'Lime', 'Orange', 'Fraise'];

  @ViewChild('input')
  input!: ElementRef<HTMLInputElement>;

  @Input() text!: string;


  constructor() {
    this.filteredIngredients = this.inputCtrl.valueChanges.pipe(
      startWith(null),
      map((ingredient: string | null) => (ingredient ? this._filter(ingredient) : this.allIngredients.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (!this.allIngredients.includes(value)) {
      return;
    }
    // Add our ingredient
    if (value) {
      this.ingredients.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.inputCtrl.setValue(null);
  }

  remove(ingredient: string): void {
    const index = this.ingredients.indexOf(ingredient);

    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.ingredients.push(event.option.viewValue);
    this.input.nativeElement.value = '';
    this.inputCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allIngredients.filter(ingredient => ingredient.toLowerCase().includes(filterValue));
  }
}
