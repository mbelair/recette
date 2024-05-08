import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEpicerieComponent } from './liste-epicerie.component';

describe('ListeEpicerieComponent', () => {
  let component: ListeEpicerieComponent;
  let fixture: ComponentFixture<ListeEpicerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEpicerieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeEpicerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
