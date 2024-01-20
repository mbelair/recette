import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { AppService } from '../app.service';
import { CreateRecetteAddIngredientDialogComponent } from '../create-recette-add-ingredient-dialog/create-recette-add-ingredient-dialog.component';
import { CreateRecetteAddPreparationDialogComponentComponent } from '../create-recette-add-preparation-dialog-component/create-recette-add-preparation-dialog-component.component';
import { GenericDeleteDialogComponent } from '../generic-delete-dialog/generic-delete-dialog.component';
import { IngredientRecette } from '../models/ingredientRecette';
import { Preparation } from '../models/preparation';
import { Recette } from '../models/recette';
import { UniteMesure } from '../models/uniteMesure';


@Component({
  selector: 'app-create-recette',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatListModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatIconModule, MatDialogModule, CreateRecetteAddIngredientDialogComponent],
  templateUrl: './create-recette.component.html',
  styleUrl: './create-recette.component.scss'
})
export class CreateRecetteComponent {

  protected recette: Recette = new Recette(true);

  constructor(public dialog: MatDialog, private appService: AppService) {

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

  openEditPreparationtDialog(preparation: Preparation) {
    this.dialog.open(CreateRecetteAddPreparationDialogComponentComponent, {
      data: {
        recette: this.recette,
        step: preparation
      },
    });
  }

  openDeletePreparationtDialog(preparation: Preparation) {
    const dialogRef = this.dialog.open(GenericDeleteDialogComponent, {
      data: {
        title: "Supprimer une étape"
      },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        const category = this.recette.categoriePreparation.find(ci => ci.preparation.includes(preparation));
        category.preparation.splice(category.preparation.indexOf(preparation), 1);
      }
    });
  }

  openAddPreparationDialog() {
    this.dialog.open(CreateRecetteAddPreparationDialogComponentComponent, {
      data: {
        recette: this.recette,
        step: null
      },
    });
  }

  createRecette() {
    this.appService.createRecette(this.recette).subscribe({
      next: () => {
        alert('YAY!');
      }
    })
  }
}
