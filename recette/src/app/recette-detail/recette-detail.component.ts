import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Recette } from '../models/recette';
import { IngredientRecette } from '../models/ingredientRecette';
import { UniteMesure } from '../models/uniteMesure';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatChipsModule } from '@angular/material/chips';
import { TypeRepas } from '../models/typeRepas';
import { ListeEpicerieButtonComponent } from '../liste-epicerie-button/liste-epicerie-button.component';


@Component({
  selector: 'app-recette-detail',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, MatButtonModule, MatChipsModule, ListeEpicerieButtonComponent],
  templateUrl: './recette-detail.component.html',
  styleUrl: './recette-detail.component.scss'
})
export class RecetteDetailComponent implements OnInit {

  id: number = -1;
  recette: Recette = null;
  constructor(public service: AppService, private route: ActivatedRoute, protected router: Router, private breakpointObserver: BreakpointObserver) {

  }

  isColumnFlex$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      map(result => result.matches)
    );

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.service.getRecette(this.id).subscribe({
        next: (recette: Recette) => {
          this.recette = recette;
        }
      });
    });
  }

  getUnitLabel(ingredient: IngredientRecette): string {
    return UniteMesure.fromTypeCode(ingredient.unite).getFormatedLabel(ingredient.quantite > 1);
  }

  editRecette() {
    this.router.navigate(['edit-recette', this.recette.id]);
  }

  isDev(): boolean {
    return !environment.production;
  }

  getTypeRepasLabel(typeCode: string): string {
    return TypeRepas.fromTypeCode(typeCode).label;
  }
}
