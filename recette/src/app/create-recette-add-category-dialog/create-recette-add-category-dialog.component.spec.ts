import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecetteAddCategoryDialogComponent } from './create-recette-add-category-dialog.component';

describe('CreateRecetteAddCategoryDialogComponent', () => {
  let component: CreateRecetteAddCategoryDialogComponent;
  let fixture: ComponentFixture<CreateRecetteAddCategoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRecetteAddCategoryDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRecetteAddCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
