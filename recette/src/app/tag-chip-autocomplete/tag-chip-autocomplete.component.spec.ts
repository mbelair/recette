import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagChipAutocompleteComponent } from './tag-chip-autocomplete.component';

describe('TagChipAutocompleteComponent', () => {
  let component: TagChipAutocompleteComponent;
  let fixture: ComponentFixture<TagChipAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagChipAutocompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagChipAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
