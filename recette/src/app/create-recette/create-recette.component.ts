import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CreateRecetteIngredientComponent } from '../create-recette-ingredient/create-recette-ingredient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-recette',
  standalone: true,
  imports: [CommonModule, CreateRecetteIngredientComponent, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './create-recette.component.html',
  styleUrl: './create-recette.component.scss'
})
export class CreateRecetteComponent {

}
