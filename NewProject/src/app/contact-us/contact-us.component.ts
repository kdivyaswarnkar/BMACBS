import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HolidayService } from '../holiday.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  holidays: any = [];
  Staff: any = [];
  Basic: any = [];

  constructor(private router: Router, private holidayService: HolidayService) { }

  ngOnInit(): void {
    this.loadHolidays();
    this.loadStaff();
    this.loadBasic();
  }
  loadBasic(): void {
    debugger;
    this.holidayService.getBasic().subscribe(
      (data) => {
        debugger;
        this.Basic = data;
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.error('Error loading holidays:', error);
      }
    );
    console.log(this.Basic)
  }
  loadHolidays(): void {
    debugger;
    this.holidayService.getHolidays().subscribe(
      (data) => {
        debugger;
        this.holidays = data;
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.error('Error loading holidays:', error);
      }
    );
    console.log(this.holidays)
  }
  loadStaff(): void {
    debugger;
    this.holidayService.getStaff().subscribe(
      (data) => {
        debugger;
        this.Staff = data;
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.error('Error loading Staff:', error);
      }
    );
    console.log(this.Staff)
  }

  navigateToMembershipAdmission() {
    this.router.navigateByUrl('/MembershipAdmission');
  }

  navigateToHome() {
    this.router.navigateByUrl('/');
  }

  navigateToschemes() {
    this.router.navigateByUrl('/Schemes');
  }

  navigateToSocietyEvolution() {
    this.router.navigateByUrl('/SocietyEvolution');
  }
  navigateToLogin() {
    
    this.router.navigateByUrl('/Login');
  
}
  navigateTogallery() {
    this.router.navigateByUrl('/Gallery');
  }

  navigateTofeedback() {
    this.router.navigateByUrl('/FeedBack');
  }

  navigateToManagenebtboard() {
    this.router.navigateByUrl('/ManagementBoard');
  }

  navigateToBasicStatitics() {
    this.router.navigateByUrl('/BasicStatitics');
  }

  navigateToAboutUs() {
    this.router.navigateByUrl('/Aboutus');
  }

  navigateTocontactus() {
    if (this.router.url !== '/ContactUs') {
      this.router.navigateByUrl('/ContactUs');
    }
  }
  navigateToDisclaimer() {
    
    this.router.navigateByUrl('/Disclaimer');
  
  }
}
