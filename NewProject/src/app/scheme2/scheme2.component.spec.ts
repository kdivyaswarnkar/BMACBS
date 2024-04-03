import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scheme2Component } from './scheme2.component';

describe('Scheme2Component', () => {
  let component: Scheme2Component;
  let fixture: ComponentFixture<Scheme2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Scheme2Component]
    });
    fixture = TestBed.createComponent(Scheme2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
