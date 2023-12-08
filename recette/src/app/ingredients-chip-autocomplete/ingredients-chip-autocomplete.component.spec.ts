import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsChipAutocompleteComponent } from './ingredients-chip-autocomplete.component';

describe('IngredientsChipAutocompleteComponent', () => {
  let component: IngredientsChipAutocompleteComponent;
  let fixture: ComponentFixture<IngredientsChipAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientsChipAutocompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngredientsChipAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
