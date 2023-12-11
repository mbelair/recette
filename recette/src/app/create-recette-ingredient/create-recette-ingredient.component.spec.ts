import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecetteIngredientComponent } from './create-recette-ingredient.component';

describe('CreateRecetteIngredientComponent', () => {
  let component: CreateRecetteIngredientComponent;
  let fixture: ComponentFixture<CreateRecetteIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRecetteIngredientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRecetteIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
