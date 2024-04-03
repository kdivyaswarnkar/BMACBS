import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private router: Router) { }
navigateToMembershipAdmission() {
    this.router.navigateByUrl('/MembershipAdmission'); 
}

navigateToschemes() {
  this.router.navigateByUrl('/Schemes'); 
}
navigateToSocietyEvolution() {
this.router.navigateByUrl('/SocietyEvolution');
}
navigateToDisclaimer() {
    
  this.router.navigateByUrl('/Disclaimer');

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
navigateToAboutUs() {
  
    this.router.navigateByUrl('/Aboutus');
  
}
navigateToLogin(){
  this.router.navigateByUrl('/Login');
}
navigateToHome() {
  if (this.router.url !== '/') {
    this.router.navigateByUrl('/');
  }
}
}
