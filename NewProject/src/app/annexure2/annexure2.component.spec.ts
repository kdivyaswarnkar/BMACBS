import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Annexure2Component } from './annexure2.component';

describe('Annexure2Component', () => {
  let component: Annexure2Component;
  let fixture: ComponentFixture<Annexure2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Annexure2Component]
    });
    fixture = TestBed.createComponent(Annexure2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
