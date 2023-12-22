import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { CreateRecetteAddIngredientDialogComponent } from '../create-recette-add-ingredient-dialog/create-recette-add-ingredient-dialog.component';
import { Recette } from '../models/recette';
import { UniteMesure } from '../models/uniteMesure';
import { IngredientRecette } from '../models/ingredientRecette';
import { GenericDeleteDialogComponent } from '../generic-delete-dialog/generic-delete-dialog.component';
import { DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'app-create-recette',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatListModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatIconModule, MatDialogModule, CreateRecetteAddIngredientDialogComponent],
  templateUrl: './create-recette.component.html',
  styleUrl: './create-recette.component.scss'
})
export class CreateRecetteComponent {

  protected recette: Recette = new Recette(true);

  constructor(public dialog: MatDialog) {

  }

  openAddIngredientDialog() {
    this.dialog.open(CreateRecetteAddIngredientDialogComponent, {
      data: {
        recette: this.recette,
        ingredient: null
      },
    });
  }

  getUnitLabel(ingredient: IngredientRecette): string {
    return UniteMesure.fromTypeCode(ingredient.unite).getFormatedLabel(ingredient.quantite > 1);
  }

  openEditIngredientDialog(ingredient: IngredientRecette) {
    this.dialog.open(CreateRecetteAddIngredientDialogComponent, {
      data: {
        recette: this.recette,
        ingredient: ingredient
      },
    });
  }

  openDeleteIngredientDialog(ingredient: IngredientRecette) {
    const dialogRef = this.dialog.open(GenericDeleteDialogComponent, {
      data: {
        title: "Supprimer un ingrédient"
      },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        const category = this.recette.categorieIngredient.find(ci => ci.ingredient.includes(ingredient));
        category.ingredient.splice(category.ingredient.indexOf(ingredient), 1);
      }
    });
  }
}
