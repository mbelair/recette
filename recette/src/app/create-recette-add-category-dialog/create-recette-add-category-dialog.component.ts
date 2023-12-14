import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { CategorieIngredient } from '../models/categorieIngredient';

@Component({
  selector: 'app-create-recette-add-category-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './create-recette-add-category-dialog.component.html',
  styleUrl: './create-recette-add-category-dialog.component.scss'
})
export class CreateRecetteAddCategoryDialogComponent {
  protected data: CategorieIngredient = new CategorieIngredient();
  constructor(public dialogRef: MatDialogRef<CreateRecetteAddCategoryDialogComponent>) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
