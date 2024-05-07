import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
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
import { TagList } from '../models/TagList';
import { Tag } from '../models/tag';
import { EditTagComponent } from '../edit-tag/edit-tag.component';


@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss'
})
export class TagListComponent {

  dataSource = new MatTableDataSource<TagList>();
  @ViewChild(MatSort) sort: MatSort;


  displayedColumns: string[] = ['nom', 'recetteCount', 'actions'];

  constructor(protected service: AppService, public dialog: MatDialog, protected router: Router) {

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = this.filterPredicate.bind(this);
  }

  filterPredicate(data: TagList, filter: string): boolean {
    return this.service.normalize(data.nom).includes(this.service.normalize(filter));
  }

  ngOnInit(): void {
    this.getAllTagsWithRecetteCount();
  }

  getAllTagsWithRecetteCount() {
    this.service.getAllTagsWithRecetteCount().subscribe({
      next: (value) => {
        this.dataSource.data = value;
      }
    });
  }

  handleRowClicked(row: Tag) {
    this.router.navigate(['tags', row.id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openEditTagDialog(element: Tag, event: Event) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(EditTagComponent, {
      data: {
        tag: element
      }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.getAllTagsWithRecetteCount();
      }
    });
  }

  openDeleteTagDialog(element: Tag, event: Event) {
    event.stopPropagation();

    const dialogRef = this.dialog.open(GenericDeleteDialogComponent, {
      data: {
        title: "Supprimer une étiquette"
      },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.service.deleteTag(element).subscribe({
          next: () => {
            this.getAllTagsWithRecetteCount();
          }
        });
      }
    });
  }
}
