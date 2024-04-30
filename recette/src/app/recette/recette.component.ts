import { Component, OnInit } from '@angular/core';
import { RecetteElementComponent } from '../recette-element/recette-element.component';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RecetteFiltresComponent } from '../recette-filtres/recette-filtres.component';
import { Recette } from '../models/recette';
import { environment } from '../../environments/environment';
import { Filters } from '../models/filters';

@Component({
  selector: 'app-recette',
  standalone: true,
  imports: [RecetteElementComponent, RecetteFiltresComponent, CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './recette.component.html',
  styleUrl: './recette.component.scss'
})
export class RecetteComponent implements OnInit {

  recettes: Recette[];
  filteredRecettes: Recette[];
  constructor(public appService: AppService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.appService.getAllRecettes().subscribe({
      next: (recettes: Recette[]) => {
        this.recettes = recettes;
        this.filteredRecettes = this.recettes.slice();
      }
    })
  }

  openFilterDialog() {
    const dialogRef = this.dialog.open(RecetteFiltresComponent, {
      minWidth: "50%"
    });

    dialogRef.afterClosed().subscribe((result: Filters) => {
      if (result) {
        this.filteredRecettes = this.recettes.slice();
        if (result.typeRepas.length > 0) {
          this.filteredRecettes = this.filteredRecettes.filter(r => result.typeRepas.map(tr => tr.typeCode).includes(r.typeRepas));
        }
      }
    });
  }

  isDev(): boolean {
    return !environment.production;
  }
}
