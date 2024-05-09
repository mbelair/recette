import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEpicerieButtonComponent } from './liste-epicerie-button.component';

describe('ListeEpicerieButtonComponent', () => {
  let component: ListeEpicerieButtonComponent;
  let fixture: ComponentFixture<ListeEpicerieButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEpicerieButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeEpicerieButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
