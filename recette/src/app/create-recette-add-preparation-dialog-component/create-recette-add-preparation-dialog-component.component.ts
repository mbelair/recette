import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CreateRecetteAddCategoryDialogComponent } from '../create-recette-add-category-dialog/create-recette-add-category-dialog.component';
import { BaseCategorie } from '../models/baseCategorie';
import { CategoriePreparation } from '../models/categoriePreparation';
import { Preparation } from '../models/preparation';
import { Recette } from '../models/recette';

@Component({
  selector: 'app-create-recette-add-preparation-dialog-component',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatAutocompleteModule, CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatDialogModule, MatButtonModule, CreateRecetteAddCategoryDialogComponent],
  templateUrl: './create-recette-add-preparation-dialog-component.component.html',
  styleUrl: './create-recette-add-preparation-dialog-component.component.scss'
})
export class CreateRecetteAddPreparationDialogComponentComponent {
  protected recette: Recette;

  protected categoriePreparation: CategoriePreparation[] = [];

  categoryCtrl = new FormControl(0);
  detailCtrl = new FormControl('');

  form = new FormGroup({
    categoryCtrl: this.categoryCtrl,
    detailCtrl: this.detailCtrl
  })

  editingStep: Preparation = null;

  constructor(
    public dialogRef: MatDialogRef<CreateRecetteAddPreparationDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: { recette: Recette, step: Preparation },
    public dialog: MatDialog,
  ) {
    this.recette = data.recette;

    let chosenCategory = null;
    if (data.step) {
      chosenCategory = this.recette.categoriePreparation.find(cp => cp.preparation.includes(data.step));

      this.detailCtrl.setValue(data.step.text);
      this.editingStep = data.step;
    } else {
      chosenCategory = this.recette.categoriePreparation.find(ci => ci.isDefaultCategory);
      if (!chosenCategory) {
        chosenCategory = new CategoriePreparation(true);
        this.recette.categoriePreparation.push(chosenCategory);
      }
    }

    this.categoryCtrl.setValue(chosenCategory.id);

    this.categoriePreparation = [];
    this.recette.categoriePreparation.map(ci => this.categoriePreparation.push(ci));
  }

  getTitle() {
    if (this.editingStep) {
      return "Modifier une étape de préparation";
    } else {
      return "Ajouter une étape de préparation";
    }
  }

  onCancelClick(): void {
    this.dialogRef.close(null);
  }
  onOkClick(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    let step = this.editingStep ? this.editingStep : new Preparation();

    this.categoriePreparation.map(ci => {
      if (!this.recette.categoriePreparation.some(rci => rci.id === ci.id)) {
        this.recette.categoriePreparation.push(ci);
      }
    })

    const chosenCategory = this.recette.categoriePreparation.find(cp => cp.id === this.categoryCtrl.getRawValue());
    const previousCategory = this.recette.categoriePreparation.find(cp => cp.preparation.find(p => p.id === step.id));

    step.text = this.detailCtrl.value;
    if (!this.editingStep) {
      step.id = 1 + this.recette.categoriePreparation.reduce((accumulator, currentValue) => {
        return Math.max(accumulator, currentValue.preparation.reduce((accumulator2, currentValue2) => {
          return Math.max(accumulator2, currentValue2.id);
        }, -1));
      }, -1);
    }
    if (chosenCategory.id !== previousCategory?.id) {
      if (previousCategory) {
        previousCategory.preparation.splice(previousCategory.preparation.indexOf(this.editingStep), 1);
      }
      step.ordre = chosenCategory.preparation.length;

      this.recette.categoriePreparation.find(cp => cp.id === this.categoryCtrl.getRawValue()).preparation.push(step);
    }
    this.dialogRef.close();
  }

  openAddCategoryDialog() {
    const dialogRef = this.dialog.open(CreateRecetteAddCategoryDialogComponent, {
    });

    dialogRef.afterClosed().subscribe((result: BaseCategorie) => {
      result.ordre = this.categoriePreparation.length;
      result.id = 1 + this.categoriePreparation.reduce((accumulator, currentValue) => {
        return Math.max(accumulator, currentValue.id);
      }, -1);
      this.categoriePreparation.push(CategoriePreparation.fromBase(result));
      this.categoryCtrl.setValue(result.id);
    });
  }

}


