import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schemes',
  templateUrl: './schemes.component.html',
  styleUrls: ['./schemes.component.css']
})
export class SchemesComponent implements OnInit {
  isShowScheme1: boolean = false;
  isShowScheme2: boolean = false;
  isShowScheme3: boolean = false;
  isShowScheme6: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }


  navigateToMembershipAdmission() {
    this.router.navigateByUrl('/MembershipAdmission'); 
  }

  navigateToHome() {
    this.router.navigateByUrl('/');
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
  navigateToschemes() {
    if (this.router.url !== '/Schemes') {
      this.router.navigateByUrl('/Schemes');
    }
  }
  enablesheme(action:any){
if(action==='Scheme - 1'){
  this.isShowScheme1=true;
  this.isShowScheme2=false;
  this.isShowScheme3=false;
  this.isShowScheme6=false;
}
else if(action==='Scheme - 2'){
  this.isShowScheme1=false;
  this.isShowScheme2=true;
  this.isShowScheme3=false;
  this.isShowScheme6=false;
}
else if(action==='Scheme - 3'){
  this.isShowScheme1=false;
  this.isShowScheme2=false;
  this.isShowScheme3=true;
  this.isShowScheme6=false;
}
else if(action==='Scheme - 6'){
  this.isShowScheme1=false;
  this.isShowScheme2=false;
  this.isShowScheme3=false;
  this.isShowScheme6=true;
}
  }
}
