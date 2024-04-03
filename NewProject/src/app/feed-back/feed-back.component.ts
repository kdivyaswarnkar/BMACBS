import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HolidayService } from '../holiday.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit {
  Name: any;
  Mobile: any;
  GLNO: any;
  Email: any;
  YourFeedback: any;
  message: string = '';

  constructor(private router: Router, private holidayService: HolidayService) { 
  
  }
  ngOnInit(): void {
    
  }

  insertData() {
    const feedbackData: any = {
        Name: this.Name,
        GLNO: this.GLNO,
        Mobile: this.Mobile,
        Email: this.Email,
        YourFeedback: this.YourFeedback
    };

    this.holidayService.insertFeedback(feedbackData).subscribe(
        response => {
            console.log('Data inserted successfully:', response);
            this.message = 'Data inserted successfully';
            alert(this.message);

            // Clear all textboxes after successful insertion
            this.Name = '';
            this.GLNO = '';
            this.Mobile = '';
            this.Email = '';
            this.YourFeedback = '';
        },
        error => {
            console.error('Error inserting data:', error);
            this.message = 'Error inserting data'; // Set error message
        }
    );
}


  navigateToLogin() {
    
    this.router.navigateByUrl('/Login');
  
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
navigateToDisclaimer() {
    
  this.router.navigateByUrl('/Disclaimer');

}
navigateToSocietyEvolution() {
this.router.navigateByUrl('/SocietyEvolution');
}
navigateTogallery() {
  this.router.navigateByUrl('/Gallery'); 
}
navigateToManagenebtboard() {
this.router.navigateByUrl('/ManagementBoard');
}
navigateToBasicStatitics() {
this.router.navigateByUrl('/BasicStatitics'); 
}
navigateTocontactus() {
this.router.navigateByUrl('/ContactUs');
}
navigateToAboutUs() {
  
    this.router.navigateByUrl('/Aboutus');
  
}
navigateTofeedback() {
  if (this.router.url !== '/FeedBack') {
    this.router.navigateByUrl('/FeedBack');
  }
}
}
