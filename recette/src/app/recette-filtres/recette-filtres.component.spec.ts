import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteFiltresComponent } from './recette-filtres.component';

describe('RecetteFiltresComponent', () => {
  let component: RecetteFiltresComponent;
  let fixture: ComponentFixture<RecetteFiltresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetteFiltresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecetteFiltresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
