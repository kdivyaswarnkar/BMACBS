import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent {
  constructor(private router: Router) { }
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
navigateTocontactus() {
this.router.navigateByUrl('/ContactUs');
}
navigateToLogin() {
    
  this.router.navigateByUrl('/Login');

}
navigateToDisclaimer() {
    
  this.router.navigateByUrl('/Disclaimer');

}
navigateToAboutUs() {
  if (this.router.url !== '/aboutus') {
    this.router.navigateByUrl('/aboutus');
  }
}
}
