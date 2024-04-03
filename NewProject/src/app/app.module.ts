import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Scheme1Component } from './scheme1/scheme1.component';
import { LoginComponent } from './login/login.component';
import { BasicStatiticsComponent } from './basic-statitics/basic-statitics.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { SchemesComponent } from './schemes/schemes.component';
import { Scheme2Component } from './scheme2/scheme2.component';
import { Scheme3Component } from './scheme3/scheme3.component';
import { Scheme4Component } from './scheme4/scheme4.component';
import { FormsModule } from '@angular/forms';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ManagementComponent } from './management/management.component';
import { Annexure1Component } from './annexure1/annexure1.component';
import { Annexure2Component } from './annexure2/annexure2.component';
import { Annexure3Component } from './annexure3/annexure3.component';
import { Annexure4Component } from './annexure4/annexure4.component';
import { ParSchemesComponent } from './par-schemes/par-schemes.component';
import { RegdetailsComponent } from './regdetails/regdetails.component';
import { HariComponent } from './hari/hari.component';
import { ManagementBoardComponent } from './management-board/management-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    Scheme1Component,
    LoginComponent,
    BasicStatiticsComponent,
    FeedBackComponent,
    SchemesComponent,
    Scheme2Component,
    Scheme3Component,
    Scheme4Component,
    DisclaimerComponent,
    ManagementComponent,
    ManagementBoardComponent,
    Annexure1Component,
    Annexure2Component,
    Annexure3Component,
    Annexure4Component,
    ParSchemesComponent,
    RegdetailsComponent,
    HariComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule // Add the AppRoutingModule to the imports array,
    ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
