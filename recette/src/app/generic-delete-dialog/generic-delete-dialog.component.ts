import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CreateRecetteAddCategoryDialogComponent } from '../create-recette-add-category-dialog/create-recette-add-category-dialog.component';

@Component({
  selector: 'app-generic-delete-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './generic-delete-dialog.component.html',
  styleUrl: './generic-delete-dialog.component.scss'
})
export class GenericDeleteDialogComponent {
  title: string;
  constructor(@Inject(MAT_DIALOG_DATA) protected data: { title: string }, private dialogRef: MatDialogRef<CreateRecetteAddCategoryDialogComponent>) {
    this.title = data.title;
  }


  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onOkClick(): void {
    this.dialogRef.close(true);
  }
}
