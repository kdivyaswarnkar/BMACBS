import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementBoardComponent } from './management-board.component';

describe('ManagementBoardComponent', () => {
  let component: ManagementBoardComponent;
  let fixture: ComponentFixture<ManagementBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementBoardComponent]
    });
    fixture = TestBed.createComponent(ManagementBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
