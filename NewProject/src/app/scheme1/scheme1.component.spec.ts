import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scheme1Component } from './scheme1.component';

describe('Scheme1Component', () => {
  let component: Scheme1Component;
  let fixture: ComponentFixture<Scheme1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Scheme1Component]
    });
    fixture = TestBed.createComponent(Scheme1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
