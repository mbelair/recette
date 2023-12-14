import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecetteAddIngredientDialogComponent } from './create-recette-add-ingredient-dialog.component';

describe('CreateRecetteAddIngredientDialogComponent', () => {
  let component: CreateRecetteAddIngredientDialogComponent;
  let fixture: ComponentFixture<CreateRecetteAddIngredientDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRecetteAddIngredientDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRecetteAddIngredientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
