import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scheme4Component } from './scheme4.component';

describe('Scheme4Component', () => {
  let component: Scheme4Component;
  let fixture: ComponentFixture<Scheme4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Scheme4Component]
    });
    fixture = TestBed.createComponent(Scheme4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
