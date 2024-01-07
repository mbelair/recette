import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { BaseCategorie } from '../models/BaseCategorie';

@Component({
  selector: 'app-create-recette-add-category-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './create-recette-add-category-dialog.component.html',
  styleUrl: './create-recette-add-category-dialog.component.scss'
})
export class CreateRecetteAddCategoryDialogComponent {
  nomCtrl = new FormControl('', [Validators.required]);

  form = new FormGroup({
    nomCtrl: this.nomCtrl,
  });


  protected data: BaseCategorie = new BaseCategorie();
  constructor(public dialogRef: MatDialogRef<CreateRecetteAddCategoryDialogComponent>) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.data.nom = this.nomCtrl.value;
    this.dialogRef.close(this.data);
  }
}
