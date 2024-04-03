import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegdetailsComponent } from './regdetails.component';

describe('RegdetailsComponent', () => {
  let component: RegdetailsComponent;
  let fixture: ComponentFixture<RegdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegdetailsComponent]
    });
    fixture = TestBed.createComponent(RegdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
