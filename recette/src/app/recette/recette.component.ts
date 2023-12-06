import { Component, OnInit } from '@angular/core';
import { RecetteElementComponent } from '../recette-element/recette-element.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recette',
  standalone: true,
  imports: [RecetteElementComponent, CommonModule],
  templateUrl: './recette.component.html',
  styleUrl: './recette.component.scss'
})
export class RecetteComponent implements OnInit {

  recettes: number[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.recettes.push(i);
    }
  }

}
