import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HolidayService } from '../holiday.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-par-schemes',
  templateUrl: './par-schemes.component.html',
  styleUrls: ['./par-schemes.component.css']
})
export class ParSchemesComponent implements OnInit {
  schemes: any = [];
  constructor(private router: Router, private holidayService: HolidayService) { }

  ngOnInit(): void {
    this.loadschemes();
  }

  loadschemes(): void {
    debugger;
    this.holidayService.getschemes().subscribe(
      (data) => {
        debugger;
        this.schemes = data;
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.error('Error loading holidays:', error);
      }
    );
    console.log(this.schemes)
  }
 
}
