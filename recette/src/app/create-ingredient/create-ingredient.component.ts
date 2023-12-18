import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { IngredientCategoryEnum, Ingredient } from '../models/ingredient';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-create-ingredient',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, MatInputModule, MatButtonModule, MatButtonToggleModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './create-ingredient.component.html',
  styleUrl: './create-ingredient.component.scss'
})
export class CreateIngredientComponent {
  protected data: Ingredient = new Ingredient();

  categories: IngredientCategoryEnum[] = IngredientCategoryEnum.allIngredientCategories();

  constructor(public dialogRef: MatDialogRef<CreateIngredientComponent>) {
    console.log(this.categories)
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }


}
