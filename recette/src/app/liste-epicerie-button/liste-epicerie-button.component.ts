import { Component, Input } from '@angular/core';
import { Recette } from '../models/recette';
import { AppService } from '../app.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-epicerie-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './liste-epicerie-button.component.html',
  styleUrl: './liste-epicerie-button.component.scss'
})
export class ListeEpicerieButtonComponent {
  @Input() recette: Recette;

  constructor(protected service: AppService) {

  }

  toggleRecetteToListeEpicerie() {
    const recettes = this.service.listeEpicerie.value;
    if (this.isInListeEpicerie()) {
      this.service.removeFromListeEpicerie(this.recette);
    } else {
      this.service.addToListeEpicerie(this.recette);
    }
  }

  getListeEpicerieIcon(): string {
    if (this.isInListeEpicerie()) {
      return "remove";
    } else {
      return "add";
    }
  }

  getListeEpicerieColor(): string {
    if (this.isInListeEpicerie()) {
      return "warn";
    } else {
      return "primary";
    }
  }

  isInListeEpicerie() {
    const recettes = this.service.listeEpicerie.value;
    return recettes.includes(this.recette.id);
  }
}
