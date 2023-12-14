import { Component, OnInit } from '@angular/core';
import { RecetteElementComponent } from '../recette-element/recette-element.component';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RecetteFiltresComponent } from '../recette-filtres/recette-filtres.component';

@Component({
  selector: 'app-recette',
  standalone: true,
  imports: [RecetteElementComponent, RecetteFiltresComponent, CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './recette.component.html',
  styleUrl: './recette.component.scss'
})
export class RecetteComponent implements OnInit {


  constructor(public appService: AppService, public dialog: MatDialog) {

  }

  ngOnInit(): void {

  }

  openFilterDialog() {
    this.dialog.open(RecetteFiltresComponent, {
      minWidth: "50%"
    });
  }
}
