import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipAdmissionComponent } from './membership-admission.component';

describe('MembershipAdmissionComponent', () => {
  let component: MembershipAdmissionComponent;
  let fixture: ComponentFixture<MembershipAdmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembershipAdmissionComponent]
    });
    fixture = TestBed.createComponent(MembershipAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
