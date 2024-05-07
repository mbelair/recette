import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Observable, debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs';
import { AppService } from '../app.service';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-tag-chip-autocomplete',
  standalone: true,
  imports: [MatAutocompleteModule, CommonModule, MatInputModule, ReactiveFormsModule, MatChipsModule, MatIconModule],
  templateUrl: './tag-chip-autocomplete.component.html',
  styleUrl: './tag-chip-autocomplete.component.scss'
})
export class TagChipAutocompleteComponent {

  inputCtrl = new FormControl('');
  filteredTags: Observable<Tag[]>;

  @ViewChild('input')
  input!: ElementRef<HTMLInputElement>;

  @Input() text: string;
  @Input() tags: Tag[];


  constructor(private appService: AppService) {
    this.filteredTags = this.inputCtrl.valueChanges.pipe(
      startWith(null),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm: string | Tag) => {
        const nom = typeof searchTerm === 'string' ? searchTerm : searchTerm?.nom;
        return this.appService.getAllTags(nom);
      }),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    this.selectTag(value);
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectTag(event.option.viewValue);
  }

  selectTag(value: string) {
    const tag = this.appService.allTags.value.find(i => i.nom === value);
    if (!tag) {
      return;
    } else {
      this.tags.push(tag);
    }

    // Clear the input value
    this.input.nativeElement.value = '';
    this.inputCtrl.setValue(null);
  }

}
