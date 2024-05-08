import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppService } from '../app.service';
import { IngredientListeEpicerie } from '../models/IngredientListeEpicerie';
import { Recette } from '../models/recette';

@Component({
  selector: 'app-liste-epicerie',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './liste-epicerie.component.html',
  styleUrl: './liste-epicerie.component.scss'
})
export class ListeEpicerieComponent implements OnInit {
  recettes: Recette[] = [];
  displayedColumns: string[] = ['nom'];
  ingredientList: Map<number, IngredientListeEpicerie[]> = null;
  constructor(public service: AppService) {

  }
  ngOnInit(): void {
    this.service.getAllRecettes().subscribe({
      next: (r) => {
        this.recettes.push(r[0]);
        this.recettes.push(r[1]);
        this.computeIngredientList();
      }
    })
  }


  computeIngredientList() {
    this.ingredientList = new Map<number, IngredientListeEpicerie[]>();
    this.recettes.forEach(r => {
      r.categorieIngredient.flatMap(c => c.ingredient).forEach(i => {
        let ingredient: IngredientListeEpicerie[] = null;
        if (this.ingredientList.has(i.ingredient_Id)) {
          ingredient = this.ingredientList.get(i.ingredient_Id);
        } else {
          ingredient = [];
        }
        ingredient.push(IngredientListeEpicerie.fromIngredientRecette(i, r));
        this.ingredientList.set(i.ingredient_Id, ingredient);

      });
    });
  }

  formatIngredient(ingredients: IngredientListeEpicerie[]) {
    if (ingredients.length === 1) {
      return ingredients[0].getLabel();
    } else {
      if (new Set(ingredients.map(i => i.unite)).size === 1) {
        const ingredient: IngredientListeEpicerie = IngredientListeEpicerie.fromIngredientListeEpicerie(ingredients[0]);
        for (let i = 1; i < ingredients.length; i++) {
          ingredient.quantite += ingredients[i].quantite;
        }
        return ingredient.getLabel();
      }
      return ingredients[0].nom;
    }
  }
}
