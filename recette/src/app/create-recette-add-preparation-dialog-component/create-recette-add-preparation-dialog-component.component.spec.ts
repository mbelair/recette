import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecetteAddPreparationDialogComponentComponent } from './create-recette-add-preparation-dialog-component.component';

describe('CreateRecetteAddPreparationDialogComponentComponent', () => {
  let component: CreateRecetteAddPreparationDialogComponentComponent;
  let fixture: ComponentFixture<CreateRecetteAddPreparationDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRecetteAddPreparationDialogComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRecetteAddPreparationDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
