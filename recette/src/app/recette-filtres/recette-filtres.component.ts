import { CommonModule } from '@angular/common';
import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IngredientsChipAutocompleteComponent } from '../ingredients-chip-autocomplete/ingredients-chip-autocomplete.component';
import { TypeRepas } from '../models/typeRepas';

@Component({
  selector: 'app-recette-filtres',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatCheckboxModule, MatExpansionModule, MatAutocompleteModule, CommonModule, MatInputModule, ReactiveFormsModule, MatChipsModule, MatIconModule, IngredientsChipAutocompleteComponent],
  templateUrl: './recette-filtres.component.html',
  styleUrl: './recette-filtres.component.scss'
})
export class RecetteFiltresComponent implements OnInit {

  allMealTypes = TypeRepas.ALL;

  mealType = this._formBuilder.group({});

  totalTime = this._formBuilder.group({
    less30: false,
    from30to60: false,
    more60: false,
  });

  myForm = this._formBuilder.group({
    mealType: this.mealType,
    totalTime: this.totalTime
  });

  constructor(private _formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.allMealTypes.forEach(mt => {
      this.mealType.addControl(mt.typeCode, new FormControl());
    });
  }


}
