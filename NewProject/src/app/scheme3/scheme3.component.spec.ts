import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scheme3Component } from './scheme3.component';

describe('Scheme3Component', () => {
  let component: Scheme3Component;
  let fixture: ComponentFixture<Scheme3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Scheme3Component]
    });
    fixture = TestBed.createComponent(Scheme3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
