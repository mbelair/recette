import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IngredientsChipAutocompleteComponent } from '../ingredients-chip-autocomplete/ingredients-chip-autocomplete.component';

@Component({
  selector: 'app-recette-filtres',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatCheckboxModule, MatExpansionModule, MatAutocompleteModule, CommonModule, MatInputModule, ReactiveFormsModule, MatChipsModule, MatIconModule, IngredientsChipAutocompleteComponent],
  templateUrl: './recette-filtres.component.html',
  styleUrl: './recette-filtres.component.scss'
})
export class RecetteFiltresComponent {

  mealType = this._formBuilder.group({
    accompagnement: false,
    collation: false,
    dejeuner: false,
    dessert: false,
    entree: false,
    diner: false,
    platPrincipal: false,
  });

  totalTime = this._formBuilder.group({
    less30: false,
    from30to60: false,
    more60: false,
  });

  constructor(private _formBuilder: FormBuilder) {

  }


}
