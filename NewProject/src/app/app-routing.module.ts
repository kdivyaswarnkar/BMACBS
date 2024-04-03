import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent } from './aboutus/aboutus.component';
import { MainComponent } from './main/main.component';
import { MembershipAdmissionComponent } from './membership-admission/membership-admission.component'; 
import { SchemesComponent } from './schemes/schemes.component';
import { SocietyEvolutionComponent } from './society-evolution/society-evolution.component';
import { ManagementBoardComponent } from './management-board/management-board.component';
import { BasicStatiticsComponent } from './basic-statitics/basic-statitics.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { LoginComponent } from './login/login.component';
import { Scheme1Component } from './scheme1/scheme1.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'Aboutus', component: AboutusComponent },
  { path: 'MembershipAdmission', component: MembershipAdmissionComponent },
  { path: 'Schemes', component: SchemesComponent },
  { path: 'SocietyEvolution', component: SocietyEvolutionComponent },
  { path: 'ManagementBoard', component: ManagementBoardComponent },
  { path: 'BasicStatitics', component: BasicStatiticsComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'FeedBack', component: FeedBackComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'schemes/scheme-1', component: Scheme1Component },
  { path: 'Disclaimer', component: DisclaimerComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
