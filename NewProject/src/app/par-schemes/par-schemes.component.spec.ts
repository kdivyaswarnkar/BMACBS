import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParSchemesComponent } from './par-schemes.component';

describe('ParSchemesComponent', () => {
  let component: ParSchemesComponent;
  let fixture: ComponentFixture<ParSchemesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParSchemesComponent]
    });
    fixture = TestBed.createComponent(ParSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
