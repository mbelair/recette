import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Recette } from '../models/recette';
import { IngredientRecette } from '../models/ingredientRecette';
import { UniteMesure } from '../models/uniteMesure';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-recette-detail',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './recette-detail.component.html',
  styleUrl: './recette-detail.component.scss'
})
export class RecetteDetailComponent implements OnInit {

  id: number = -1;
  recette: Recette = null;
  constructor(public service: AppService, private route: ActivatedRoute) {

  }

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
}
