import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Annexure3Component } from './annexure3.component';

describe('Annexure3Component', () => {
  let component: Annexure3Component;
  let fixture: ComponentFixture<Annexure3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Annexure3Component]
    });
    fixture = TestBed.createComponent(Annexure3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
