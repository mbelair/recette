import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AppService } from '../app.service';
import { Ingredient, allCategories, getCategoryLabel } from '../models/ingredient';


@Component({
  selector: 'app-create-ingredient',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, MatInputModule, MatButtonModule, MatButtonToggleModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './create-ingredient.component.html',
  styleUrl: './create-ingredient.component.scss'
})
export class CreateIngredientComponent {
  protected data: Ingredient = new Ingredient();
  isUpdating = false;
  getCategoryLabel = getCategoryLabel;

  categories = allCategories();
  constructor(public dialogRef: MatDialogRef<CreateIngredientComponent>, private appService: AppService, @Inject(MAT_DIALOG_DATA) protected injectedData: { ingredient: Ingredient }) {
    if (injectedData?.ingredient) {
      this.data.id = injectedData.ingredient.id;
      this.data.nom = injectedData.ingredient.nom;
      this.data.category = injectedData.ingredient.category;
      this.isUpdating = true;
    }
  }
  get title() {
    return this.isUpdating ? "Modifier un ingrédient" : "Ajouter un ingrédient";
  }
  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onOkClick(): void {
    if (this.isUpdating) {
      this.appService.updateIngredient(this.data).subscribe({
        next: () => this.dialogRef.close(true)
      });
    } else {
      this.appService.createIngredient(this.data).subscribe({
        next: () => this.dialogRef.close(true)
      });
    }
  }
}
