import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AppService } from '../app.service';
import { Filters } from '../models/filters';
import { Recette } from '../models/recette';
import { Tag } from '../models/tag';
import { TypeRepas } from '../models/typeRepas';
import { MatIconModule } from '@angular/material/icon';
import { ListeEpicerieButtonComponent } from '../liste-epicerie-button/liste-epicerie-button.component';


@Component({
  selector: 'app-recette-element',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, RouterOutlet, RouterModule, MatChipsModule, CommonModule, MatIconModule, ListeEpicerieButtonComponent],
  templateUrl: './recette-element.component.html',
  styleUrl: './recette-element.component.scss'
})
export class RecetteElementComponent {
  @Input() recettes: Recette[];

  isXSmall$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall])
    .pipe(
      map(result => result.matches)
    );

  isSmall$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Medium])
    .pipe(
      map(result => result.matches)
    );

  isMedium$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Large])
    .pipe(
      map(result => result.matches)
    );

  constructor(protected router: Router, protected service: AppService, private breakpointObserver: BreakpointObserver) {

  }

  formatTime(time: number) {
    let toReturn = "";
    if (time > 60) {
      toReturn += Math.floor(time / 60) + " h ";
    }
    return toReturn + (time % 60) + " min";
  }

  navigate(recette: Recette) {
    this.router.navigate(['recette-detail', recette.id]);
  }

  getTypeRepasLabel(typeCode: string): string {
    return TypeRepas.fromTypeCode(typeCode).label;
  }

  applyTypeRepasFilter(typeRepas: string) {
    let filter: Filters = this.service.filters.value;
    if (filter == null) {
      filter = new Filters();
    }
    if (!filter.typeRepas.map(t => t.typeCode).includes(typeRepas)) {
      filter.typeRepas.push(TypeRepas.fromTypeCode(typeRepas));
      this.service.filters.next(filter);
    }
  }

  applyTagFilter(tag: Tag) {
    let filter: Filters = this.service.filters.value;
    if (filter == null) {
      filter = new Filters();
    }
    if (!filter.tags.map(t => t.id).includes(tag.id)) {
      filter.tags.push(tag);
      this.service.filters.next(filter);
    }
  }
}
