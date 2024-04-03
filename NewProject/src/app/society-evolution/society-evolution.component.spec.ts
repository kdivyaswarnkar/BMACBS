import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyEvolutionComponent } from './society-evolution.component';

describe('SocietyEvolutionComponent', () => {
  let component: SocietyEvolutionComponent;
  let fixture: ComponentFixture<SocietyEvolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocietyEvolutionComponent]
    });
    fixture = TestBed.createComponent(SocietyEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
