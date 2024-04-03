import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-management-board',
  templateUrl: './management-board.component.html',
  styleUrls: ['./management-board.component.css']
})
export class ManagementBoardComponent {
  isManagement: boolean = false;
  isAnnexure1: boolean = false;
  isAnnexure2: boolean = false;
  isAnnexure3: boolean = false;
  isHari: boolean = false;
  constructor(private router: Router) { } 
  
  openDocument() {
    const baseUrl = window.location.origin; // Get the base URL of your application
    const documentUrl = `${baseUrl}/assets/Doc/sample.docx`; // Create the document URL
    window.open(documentUrl, '_blank'); // Open the document URL in a new window/tab
  }
  openDocument1() {
    const baseUrl = window.location.origin; // Get the base URL of your application
    const documentUrl = `${baseUrl}/assets/Doc/Assessments Module.docx`; // Create the document URL
    window.open(documentUrl, '_blank'); // Open the document URL in a new window/tab
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
  navigateTogallery() {
    this.router.navigateByUrl('/Gallery'); 
  }
  navigateTofeedback() {
    this.router.navigateByUrl('/FeedBack'); 
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

  navigateToManagenebtboard() {
    if (this.router.url !== '/ManagementBoard') {
      this.router.navigateByUrl('/ManagementBoard');
    }
  }
  enableManagementBoard(action:any){
    if(action==='Management Board'){
      this.isManagement=true;
      this.isAnnexure1=false;
      this.isAnnexure2=false;
      this.isAnnexure3=false;
      this.isHari=false;
     
    }
    else if(action==='Annexure-1 - A profile of the Directors of the Management Board as on 25-04-2021'){
      this.isManagement=false;
      this.isAnnexure1=true;
      this.isAnnexure2=false;
      this.isAnnexure3=false;
      this.isHari=false;
    }
    else if(action==='Annexure-2 - Election Council'){
      this.isManagement=false;
      this.isAnnexure1=false;
      this.isAnnexure2=true;
      this.isAnnexure3=false;
      this.isHari=false;
    }
    else if(action==='Annexure-3 - The Committees of the Society'){
      this.isManagement=false;
      this.isAnnexure1=false;
      this.isAnnexure2=false;
      this.isAnnexure3=true;
      this.isHari=false;
    }
    else if(action==='Hari'){
      this.isManagement=false;
      this.isAnnexure1=false;
      this.isAnnexure2=false;
      this.isAnnexure3=false;
      this.isHari=true;
    }
      }
}
