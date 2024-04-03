import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HolidayService } from '../holiday.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-basic-statitics',
  templateUrl: './basic-statitics.component.html',
  styleUrls: ['./basic-statitics.component.css']
})
export class BasicStatiticsComponent implements OnInit {
  Basic: any = [];
  isManagement: boolean = false;
  isregdetails: boolean = false;
  constructor(private router: Router, private holidayService: HolidayService) { }

  ngOnInit(): void {
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
  
  navigateTocontactus() {
  this.router.navigateByUrl('/ContactUs');
  }
  
  navigateToAboutUs() {
    
      this.router.navigateByUrl('/Aboutus');
  }
      navigateToLogin() {
    
        this.router.navigateByUrl('/Login');
      
  }
  navigateToBasicStatitics() {
    if (this.router.url !== '/BasicStatitics') {
      this.router.navigateByUrl('/BasicStatitics');
    }
  }
  enableManagementBoard(action:any){
    if(action==='Annexure-2 -Particulars of the Schemes'){
      this.isManagement=true;
      this.isregdetails=false;
      
    }
  else if(action==='Annexure 1: Registration Deails'){
    this.isManagement=false;
    this.isregdetails=true;
  }
  }
}
