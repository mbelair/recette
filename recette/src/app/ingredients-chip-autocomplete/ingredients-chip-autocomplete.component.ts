import { ENTER } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Observable, debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs';
import { Ingredient } from '../models/ingredient';
import { AppService } from '../app.service';

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
  filteredIngredients: Observable<Ingredient[]>;

  @ViewChild('input')
  input!: ElementRef<HTMLInputElement>;

  @Input() text: string;
  @Input() ingredients: Ingredient[];


  constructor(private appService: AppService) {
    this.filteredIngredients = this.inputCtrl.valueChanges.pipe(
      startWith(null),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm: string | Ingredient) => {
        const nom = typeof searchTerm === 'string' ? searchTerm : searchTerm?.nom;
        return this.appService.getAllIngredients(nom)
      }),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    this.selectIngredient(value);
  }

  remove(ingredient: Ingredient): void {
    const index = this.ingredients.indexOf(ingredient);

    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectIngredient(event.option.viewValue);
  }

  selectIngredient(value: string) {
    const ingredient = this.appService.allIngredients.value.find(i => i.nom === value);
    if (!ingredient) {
      return;
    } else {
      this.ingredients.push(ingredient);
    }

    // Clear the input value
    this.input.nativeElement.value = '';
    this.inputCtrl.setValue(null);
  }

}
