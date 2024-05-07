import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { IngredientsChipAutocompleteComponent } from '../ingredients-chip-autocomplete/ingredients-chip-autocomplete.component';
import { Filters, TempsTotal } from '../models/filters';
import { Ingredient } from '../models/ingredient';
import { TypeRepas } from '../models/typeRepas';
import { TagChipAutocompleteComponent } from '../tag-chip-autocomplete/tag-chip-autocomplete.component';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-recette-filtres',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatCheckboxModule, MatExpansionModule, MatAutocompleteModule, CommonModule, MatInputModule, ReactiveFormsModule, MatChipsModule, MatIconModule, IngredientsChipAutocompleteComponent, TagChipAutocompleteComponent],
  templateUrl: './recette-filtres.component.html',
  styleUrl: './recette-filtres.component.scss'
})
export class RecetteFiltresComponent implements OnInit, OnDestroy {
  ingredientsToInclude: Ingredient[] = [];
  ingredientsToExclude: Ingredient[] = [];
  tags: Tag[] = [];


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
          this.ingredientsToInclude = filters.includedIngredients;
          this.ingredientsToExclude = filters.excludedIngredients;
          this.tags = filters.tags;

          filters.tempsTotal.forEach(t => {
            switch (t) {
              case TempsTotal.LESS30:
                this.totalTime.controls.less30.setValue(true);
                break;
              case TempsTotal.FROM_30_TO_60:
                this.totalTime.controls.from30to60.setValue(true);
                break;
              case TempsTotal.MORE60:
                this.totalTime.controls.more60.setValue(true);
                break;
            }
          })
        }
      }
    }));
  }

  applyFilters(): void {
    const filters = new Filters();
    let hasFilters = this.ingredientsToInclude.length > 0 || this.ingredientsToExclude.length > 0 || this.tags.length > 0;
    Object.keys(this.mealType.controls).forEach(key => {
      if (this.mealType.get(key).value) {
        filters.typeRepas.push(TypeRepas.fromTypeCode(key));
        hasFilters = true;
      }

    });
    filters.includedIngredients = this.ingredientsToInclude;
    filters.excludedIngredients = this.ingredientsToExclude;
    filters.tags = this.tags;

    if (this.totalTime.controls.from30to60.value) {
      filters.tempsTotal.push(TempsTotal.FROM_30_TO_60);
      hasFilters = true;
    }
    if (this.totalTime.controls.less30.value) {
      filters.tempsTotal.push(TempsTotal.LESS30);
      hasFilters = true;
    }
    if (this.totalTime.controls.more60.value) {
      filters.tempsTotal.push(TempsTotal.MORE60);
      hasFilters = true;
    }

    if (hasFilters) {
      this.appService.filters.next(filters);
    } else {
      this.appService.filters.next(null);
    }
    this.dialogRef.close();
  }

}
