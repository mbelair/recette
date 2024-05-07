import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecetteElementComponent } from '../recette-element/recette-element.component';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RecetteFiltresComponent } from '../recette-filtres/recette-filtres.component';
import { Recette } from '../models/recette';
import { environment } from '../../environments/environment';
import { Filters, TempsTotal } from '../models/filters';
import { Subscription, combineLatest } from 'rxjs';

@Component({
  selector: 'app-recette',
  standalone: true,
  imports: [RecetteElementComponent, RecetteFiltresComponent, CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './recette.component.html',
  styleUrl: './recette.component.scss'
})
export class RecetteComponent implements OnInit, OnDestroy {

  filteredRecettes: Recette[];
  subscription: Subscription = new Subscription();
  constructor(public appService: AppService, public dialog: MatDialog) {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription.add(combineLatest([this.appService.getAllRecettes(), this.appService.filters]).subscribe(
      {
        next: ([recettes, filters]) => {
          if (recettes) {
            this.filteredRecettes = recettes.slice();
            if (filters) {
              this.filteredRecettes = this.filteredRecettes.filter(r => {
                let isFilteredIn = true;
                if (filters.typeRepas.length > 0) {
                  isFilteredIn = filters.typeRepas.map(tr => tr.typeCode).some(typecode => r.typeRepas.includes(typecode));
                }
                if (!isFilteredIn) {
                  return false;
                }
                if (filters.includedIngredients.length > 0) {
                  isFilteredIn = filters.includedIngredients.map(i => i.id).every(id => r.categorieIngredient.flatMap(ci => ci.ingredient).map(i => i.ingredient_Id).includes(id));
                }
                if (!isFilteredIn) {
                  return false;
                }

                if (filters.excludedIngredients.length > 0) {
                  isFilteredIn = filters.excludedIngredients.map(i => i.id).every(id => r.categorieIngredient.flatMap(ci => ci.ingredient).map(i => i.ingredient_Id).indexOf(id) === -1);
                }
                if (!isFilteredIn) {
                  return false;
                }

                if (filters.tags.length > 0) {
                  isFilteredIn = filters.tags.map(i => i.id).every(id => r.tags.map(i => i.id).includes(id));
                }
                if (!isFilteredIn) {
                  return false;
                }
                if (filters.tempsTotal.length > 0) {
                  isFilteredIn = false;
                  const tempsTotal = r.tempsCuisson + r.tempsPreparation;
                  filters.tempsTotal.forEach(t => {
                    switch (t) {
                      case TempsTotal.LESS30:
                        if (tempsTotal < 30) {
                          isFilteredIn = true;
                        }
                        break;
                      case TempsTotal.FROM_30_TO_60:
                        if (tempsTotal >= 30 && tempsTotal <= 60) {
                          isFilteredIn = true;
                        }
                        break;
                      case TempsTotal.MORE60:
                        if (tempsTotal > 60) {
                          isFilteredIn = true;
                        }
                        break;
                    }
                  });
                }

                return isFilteredIn;
              });
            }
          }
        }
      }
    ))
  }

  openFilterDialog() {
    this.dialog.open(RecetteFiltresComponent, {
      minWidth: "50%"
    });


  }

  isDev(): boolean {
    return !environment.production;
  }

  clearFilters() {
    this.appService.filters.next(null);
  }
}
