import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Annexure1Component } from './annexure1.component';

describe('Annexure1Component', () => {
  let component: Annexure1Component;
  let fixture: ComponentFixture<Annexure1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Annexure1Component]
    });
    fixture = TestBed.createComponent(Annexure1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
