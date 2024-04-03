import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStatiticsComponent } from './basic-statitics.component';

describe('BasicStatiticsComponent', () => {
  let component: BasicStatiticsComponent;
  let fixture: ComponentFixture<BasicStatiticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicStatiticsComponent]
    });
    fixture = TestBed.createComponent(BasicStatiticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
