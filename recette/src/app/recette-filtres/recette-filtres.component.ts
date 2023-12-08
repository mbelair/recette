import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { Observable, map, startWith } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatIconModule } from '@angular/material/icon';
import { IngredientsChipAutocompleteComponent } from '../ingredients-chip-autocomplete/ingredients-chip-autocomplete.component';


@Component({
  selector: 'app-recette-filtres',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatExpansionModule, MatAutocompleteModule, CommonModule, MatInputModule, ReactiveFormsModule, MatChipsModule, MatIconModule, IngredientsChipAutocompleteComponent],
  templateUrl: './recette-filtres.component.html',
  styleUrl: './recette-filtres.component.scss'
})
export class RecetteFiltresComponent {
  separatorKeysCodes: number[] = [ENTER];

  includeCtr = new FormControl('');
  excludeCtr = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allIngredients: string[] = ['Pomme', 'Citron', 'Lime', 'Orange', 'Fraise'];

  @ViewChild('includeInput')
  includeInput!: ElementRef<HTMLInputElement>;

  @ViewChild('excludeInput')
  excludeInput!: ElementRef<HTMLInputElement>;


  constructor() {
    this.filteredFruits = this.includeCtr.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allIngredients.slice())),
    );

    this.filteredFruits = this.excludeCtr.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allIngredients.slice())),
    );
  }

  add(event: MatChipInputEvent, formControl: FormControl): void {
    const value = (event.value || '').trim();
    if (!this.allIngredients.includes(value)) {
      return;
    }
    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    formControl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.includeInput.nativeElement.value = '';
    this.excludeInput.nativeElement.value = '';
    this.includeCtr.setValue(null);
    this.excludeCtr.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allIngredients.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

}
