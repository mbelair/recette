import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecetteElementComponent } from '../recette-element/recette-element.component';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RecetteFiltresComponent } from '../recette-filtres/recette-filtres.component';
import { Recette } from '../models/recette';
import { environment } from '../../environments/environment';
import { Filters } from '../models/filters';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recette',
  standalone: true,
  imports: [RecetteElementComponent, RecetteFiltresComponent, CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './recette.component.html',
  styleUrl: './recette.component.scss'
})
export class RecetteComponent implements OnInit, OnDestroy {

  recettes: Recette[];
  filteredRecettes: Recette[];
  subscription: Subscription = new Subscription();
  constructor(public appService: AppService, public dialog: MatDialog) {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.appService.getAllRecettes().subscribe({
      next: (recettes: Recette[]) => {
        this.recettes = recettes;
        this.filteredRecettes = this.recettes.slice();
      }
    });


    this.subscription.add(this.appService.filters.subscribe({
      next: (filters) => {
        this.filteredRecettes = this.recettes.slice();
        if (filters) {
          if (filters.typeRepas.length > 0) {
            this.filteredRecettes = this.filteredRecettes.filter(r => filters.typeRepas.map(tr => tr.typeCode).includes(r.typeRepas));
          }
        }
      }
    }));
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
