import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recette-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recette-detail.component.html',
  styleUrl: './recette-detail.component.scss'
})
export class RecetteDetailComponent {

  id: number = -1;
  constructor(public service: AppService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  getRecette() {
    if (this.id >= 0) {
      return this.service.recettes[this.id];
    }
    return this.service.recettes[0];
  }
}
