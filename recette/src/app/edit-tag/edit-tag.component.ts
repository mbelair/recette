import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AppService } from '../app.service';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-edit-tag',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, MatInputModule, MatButtonModule, MatButtonToggleModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './edit-tag.component.html',
  styleUrl: './edit-tag.component.scss'
})
export class EditTagComponent {

  protected data: Tag = new Tag();

  constructor(public dialogRef: MatDialogRef<EditTagComponent>, private appService: AppService, @Inject(MAT_DIALOG_DATA) protected injectedData: { tag: Tag }) {
    if (injectedData?.tag) {
      this.data.id = injectedData.tag.id;
      this.data.nom = injectedData.tag.nom;
    }
  }
  get title() {
    return "Modifier une étiquette";
  }
  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onOkClick(): void {
    this.appService.updateTag(this.data).subscribe({
      next: () => this.dialogRef.close(true)
    });
  }
}

