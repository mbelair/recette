import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteElementComponent } from './recette-element.component';

describe('RecetteElementComponent', () => {
  let component: RecetteElementComponent;
  let fixture: ComponentFixture<RecetteElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetteElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecetteElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
