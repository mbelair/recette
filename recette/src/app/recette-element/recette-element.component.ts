import { Component, Input } from '@angular/core';
import { Recette } from '../models/recette';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { AppService } from '../app.service';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-recette-element',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, RouterOutlet, RouterModule, MatChipsModule, CommonModule],
  templateUrl: './recette-element.component.html',
  styleUrl: './recette-element.component.scss'
})
export class RecetteElementComponent {
  @Input() recette!: Recette;

  constructor(protected router: Router, protected service: AppService) {

  }

  formatTime(time: number) {
    let toReturn = "";
    if (time > 60) {
      toReturn += Math.floor(time / 60) + " h ";
    }
    return toReturn + (time % 60) + " min";
  }

  navigate() {
    this.router.navigate(['recette-detail', this.recette.id]);
  }
}
