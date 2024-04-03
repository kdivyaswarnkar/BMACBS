import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  constructor(private router: Router) { }
navigateToMembershipAdmission() {
    this.router.navigateByUrl('/MembershipAdmission'); 
}
navigateToDisclaimer() {
    
  this.router.navigateByUrl('/Disclaimer');

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
navigateToAboutUs() {
  if (this.router.url !== '/aboutus') {
    this.router.navigateByUrl('/aboutus');
  }
}
}
