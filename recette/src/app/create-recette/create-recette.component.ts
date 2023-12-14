import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateRecetteAddCategoryDialogComponent } from '../create-recette-add-category-dialog/create-recette-add-category-dialog.component';
import { CreateRecetteAddIngredientDialogComponent } from '../create-recette-add-ingredient-dialog/create-recette-add-ingredient-dialog.component';
import { Recette } from '../models/recette';
import { CategorieIngredient } from '../models/categorieIngredient';
import { Ingredient } from '../models/ingredient';


@Component({
  selector: 'app-create-recette',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatIconModule, MatDialogModule, CreateRecetteAddCategoryDialogComponent, CreateRecetteAddIngredientDialogComponent],
  templateUrl: './create-recette.component.html',
  styleUrl: './create-recette.component.scss'
})
export class CreateRecetteComponent {

  protected recette: Recette = new Recette(true);

  constructor(public dialog: MatDialog) {

  }
  openAddCategoryDialog() {
    const dialogRef = this.dialog.open(CreateRecetteAddCategoryDialogComponent, {
      minWidth: "50%"
    });

    dialogRef.afterClosed().subscribe((result: CategorieIngredient) => {
      if (this.recette.categorieIngredient.length === 1 && this.recette.categorieIngredient[0].equals(new CategorieIngredient(true))) {
        this.recette.categorieIngredient = [];
      }
      result.ordre = this.recette.categorieIngredient.length;
      this.recette.categorieIngredient.push(result);
    });
  }

  openAddIngredientDialog(category: CategorieIngredient) {
    const dialogRef = this.dialog.open(CreateRecetteAddIngredientDialogComponent, {
      minWidth: "50%"
    });
    dialogRef.afterClosed().subscribe((result: Ingredient) => {
      category.ingredient.push(result);
    });
  }
}
