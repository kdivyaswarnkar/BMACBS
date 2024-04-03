import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
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
  navigateToDisclaimer() {
    
    this.router.navigateByUrl('/Disclaimer');
  
  }
  navigateToLogin() {
    
    this.router.navigateByUrl('/Login');
  
}
  navigateTogallery() {
    if (this.router.url !== '/Gallery') {
      this.router.navigateByUrl('/Gallery');
    }
  }
}
