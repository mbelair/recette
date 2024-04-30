import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, Type } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IngredientsChipAutocompleteComponent } from '../ingredients-chip-autocomplete/ingredients-chip-autocomplete.component';
import { TypeRepas } from '../models/typeRepas';
import { Filters } from '../models/filters';
import { AppService } from '../app.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-recette-filtres',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatCheckboxModule, MatExpansionModule, MatAutocompleteModule, CommonModule, MatInputModule, ReactiveFormsModule, MatChipsModule, MatIconModule, IngredientsChipAutocompleteComponent],
  templateUrl: './recette-filtres.component.html',
  styleUrl: './recette-filtres.component.scss'
})
export class RecetteFiltresComponent implements OnInit, OnDestroy {

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

  subscription: Subscription = new Subscription();

  constructor(private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<RecetteFiltresComponent>, public appService: AppService) {

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.allMealTypes.forEach(mt => {
      this.mealType.addControl(mt.typeCode, new FormControl());
    });

    this.subscription.add(this.appService.filters.subscribe({
      next: (filters) => {
        if (filters) {
          if (filters.typeRepas.length > 0) {
            filters.typeRepas.forEach(repas => {
              this.mealType.get(repas.typeCode).setValue(true);
            });
          }
        }
      }
    }));
  }

  applyFilters(): void {
    const filters = new Filters();
    let hasFilters = false;
    Object.keys(this.mealType.controls).forEach(key => {
      if (this.mealType.get(key).value) {
        filters.typeRepas.push(TypeRepas.fromTypeCode(key));
        hasFilters = true;
      }

    });
    if (hasFilters) {
      this.appService.filters.next(filters);
    } else {
      this.appService.filters.next(null);
    }
    this.dialogRef.close();
  }

}
