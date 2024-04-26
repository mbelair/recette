import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientDetail } from '../models/ingredientDetail';
import { CommonModule } from '@angular/common';
import { RecetteElementComponent } from '../recette-element/recette-element.component';

@Component({
  selector: 'app-ingredient-detail',
  standalone: true,
  imports: [CommonModule, RecetteElementComponent],
  templateUrl: './ingredient-detail.component.html',
  styleUrl: './ingredient-detail.component.scss'
})
export class IngredientDetailComponent {
  id: number = -1;
  ingredient: IngredientDetail = null;

  constructor(public service: AppService, private route: ActivatedRoute, protected router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.service.getIngredientDetail(this.id).subscribe({
        next: (ingredient: IngredientDetail) => {
          this.ingredient = ingredient;
        }
      });
    });
  }
}
