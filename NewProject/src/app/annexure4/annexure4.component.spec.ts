import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Annexure4Component } from './annexure4.component';

describe('Annexure4Component', () => {
  let component: Annexure4Component;
  let fixture: ComponentFixture<Annexure4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Annexure4Component]
    });
    fixture = TestBed.createComponent(Annexure4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
