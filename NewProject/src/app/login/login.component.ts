import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

username: any = [];
password: any = [];
error: any = [];
  constructor(private router: Router) { 
    
  }
  onSubmit() {
    // Perform user validation here (e.g., check username/password against a service)
    if (this.username === 'admin' && this.password === 'admin') {
      // Successful login
      this.error = '';
      console.log('Login successful');
      this.router.navigateByUrl('/');
    } else {
      // Invalid credentials
      this.error = 'Invalid username or password';
      console.log('Login failed');
    }
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
navigateToDisclaimer() {
    
  this.router.navigateByUrl('/Disclaimer');

}
navigateToLogin() {
  
  this.router.navigateByUrl('/Login');

}
navigateToSocietyEvolution() {
 
    this.router.navigateByUrl('/SocietyEvolution');
  
}
}
