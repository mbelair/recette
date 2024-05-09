import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppService } from '../app.service';
import { IngredientListeEpicerie } from '../models/IngredientListeEpicerie';
import { Recette } from '../models/recette';
import { IngredientCategoryEnum, getCategoryLabel } from '../models/ingredient';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { GenericDeleteDialogComponent } from '../generic-delete-dialog/generic-delete-dialog.component';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-liste-epicerie',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './liste-epicerie.component.html',
  styleUrl: './liste-epicerie.component.scss'
})
export class ListeEpicerieComponent implements OnInit {
  recettes: Recette[] = [];
  displayedColumns: string[] = ['nom'];
  ingredientList: Map<IngredientCategoryEnum, Map<number, IngredientListeEpicerie[]>> = null;
  getCategoryLabel = getCategoryLabel;


  constructor(public service: AppService, public dialog: MatDialog) {

  }
  ngOnInit(): void {
    combineLatest([this.service.getAllRecettes(), this.service.listeEpicerie]).subscribe({
      next: ([allRecettes, listeEpicerie]) => {
        this.recettes = allRecettes.filter(r => listeEpicerie.includes(r.id));
        this.computeIngredientList();
      }
    })
  }


  computeIngredientList() {
    this.ingredientList = new Map<IngredientCategoryEnum, Map<number, IngredientListeEpicerie[]>>();
    this.recettes.forEach(r => {
      r.categorieIngredient.flatMap(c => c.ingredient).forEach(i => {
        let ingredient: IngredientListeEpicerie[] = null;
        let ingredientMap: Map<number, IngredientListeEpicerie[]> = null;
        if (this.ingredientList.has(i.ingredient.category)) {
          ingredientMap = this.ingredientList.get(i.ingredient.category);
        } else {
          ingredientMap = new Map<number, IngredientListeEpicerie[]>();
        }
        if (ingredientMap.has(i.ingredient_Id)) {
          ingredient = ingredientMap.get(i.ingredient_Id);
        } else {
          ingredient = [];
        }
        ingredient.push(IngredientListeEpicerie.fromIngredientRecette(i, r));
        ingredient.sort((a, b) => a.recette.nom.localeCompare(b.recette.nom));
        ingredientMap.set(i.ingredient_Id, ingredient);
        this.ingredientList.set(i.ingredient.category, ingredientMap);
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

  openDeleteRecetteDialog(recette: Recette) {
    const dialogRef = this.dialog.open(GenericDeleteDialogComponent, {
      data: {
        title: `Supprimer ${recette.nom} de la liste d'épicerie`
      },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.service.removeFromListeEpicerie(recette);
      }
    });
  }
}
