import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { CreateIngredientComponent } from '../create-ingredient/create-ingredient.component';
import { GenericDeleteDialogComponent } from '../generic-delete-dialog/generic-delete-dialog.component';
import { IngredientList } from '../models/IngredientList';
import { Ingredient, getCategoryLabel } from '../models/ingredient';


@Component({
  selector: 'app-ingredient-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.scss'
})
export class IngredientListComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<IngredientList>();
  @ViewChild(MatSort) sort: MatSort;


  displayedColumns: string[] = ['nom', 'category', 'recetteCount', 'actions'];
  getCategoryLabel = getCategoryLabel;

  constructor(protected service: AppService, public dialog: MatDialog, protected router: Router) {

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = this.filterPredicate.bind(this);
  }

  filterPredicate(data: IngredientList, filter: string): boolean {
    return this.service.normalize(data.nom).includes(this.service.normalize(filter));
  }

  ngOnInit(): void {
    this.getAllIngredientsWithRecetteCount();
  }

  getAllIngredientsWithRecetteCount() {
    this.service.getAllIngredientsWithRecetteCount().subscribe({
      next: (value) => {
        this.dataSource.data = value;
      }
    });
  }

  handleRowClicked(row: Ingredient) {
    this.router.navigate(['ingredients', row.id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openEditIngredientDialog(element: Ingredient, event: Event) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(CreateIngredientComponent, {
      data: {
        ingredient: element
      }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.getAllIngredientsWithRecetteCount();
      }
    });
  }

  openDeleteIngredientDialog(element: Ingredient, event: Event) {
    event.stopPropagation();

    const dialogRef = this.dialog.open(GenericDeleteDialogComponent, {
      data: {
        title: "Supprimer un ingrédient"
      },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.service.deleteIngredient(element).subscribe({
          next: () => {
            this.getAllIngredientsWithRecetteCount();
          }
        });
      }
    });
  }
}
