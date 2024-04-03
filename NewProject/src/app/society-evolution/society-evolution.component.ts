import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-society-evolution',
  templateUrl: './society-evolution.component.html',
  styleUrls: ['./society-evolution.component.css']
})
export class SocietyEvolutionComponent implements OnInit {
  Basic: any = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  navigateToDisclaimer() {
    
    this.router.navigateByUrl('/Disclaimer');
  
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
  navigateToSocietyEvolution() {
    if (this.router.url !== '/SocietyEvolution') {
      this.router.navigateByUrl('/SocietyEvolution');
    }
  }
}
