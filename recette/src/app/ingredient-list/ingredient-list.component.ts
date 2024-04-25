import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AppService } from '../app.service';
import { IngredientList } from '../models/IngredientList';
import { Ingredient, getCategoryLabel } from '../models/ingredient';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-ingredient-list',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule],
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.scss'
})
export class IngredientListComponent implements OnInit, AfterViewInit {
  ingredients: IngredientList[] = null;
  dataSource = new MatTableDataSource<IngredientList>();
  @ViewChild(MatSort) sort: MatSort;


  displayedColumns: string[] = ['nom', 'category', 'recetteCount'];
  getCategoryLabel = getCategoryLabel;

  constructor(protected service: AppService) {

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = this.filterPredicate.bind(this);
  }

  filterPredicate(data: IngredientList, filter: string): boolean {
    return this.service.normalize(data.nom).includes(this.service.normalize(filter));
  }

  ngOnInit(): void {
    this.service.getAllIngredientsWithRecetteCount().subscribe({
      next: (value) => {
        this.dataSource.data = value;
        this.ingredients = value;
      }
    });
  }

  handleRowClicked(row: Ingredient) {

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
