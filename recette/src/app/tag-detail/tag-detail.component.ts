
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { TagDetail } from '../models/TagDetail';
import { RecetteElementComponent } from '../recette-element/recette-element.component';

@Component({
  selector: 'app-tag-detail',
  standalone: true,
  imports: [CommonModule, RecetteElementComponent],
  templateUrl: './tag-detail.component.html',
  styleUrl: './tag-detail.component.scss'
})
export class TagDetailComponent {
  id: number = -1;
  tag: TagDetail = null;

  constructor(public service: AppService, private route: ActivatedRoute, protected router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.service.getTagDetail(this.id).subscribe({
        next: (tag: TagDetail) => {
          this.tag = tag;
        }
      });
    });
  }
}
