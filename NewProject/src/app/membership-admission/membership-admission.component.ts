import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership-admission',
  templateUrl: './membership-admission.component.html',
  styleUrls: ['./membership-admission.component.css']
})
export class MembershipAdmissionComponent {
  isShowScheme1: boolean = false;
  isShowScheme2: boolean = false;
  isShowScheme3: boolean = false;
  isShowScheme6: boolean = false;
  constructor(private router: Router) { }
 
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
  navigateToAboutUs() {
    
      this.router.navigateByUrl('/Aboutus');
    
  }
  navigateToLogin() {
    
    this.router.navigateByUrl('/Login');
  
}
navigateToDisclaimer() {
    
  this.router.navigateByUrl('/Disclaimer');

}
  navigateToMembershipAdmission() {
    if (this.router.url !== '/MembershipAdmission') {
      this.router.navigateByUrl('/MembershipAdmission');
    }
  }
 
}
