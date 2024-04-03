import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HolidayService } from '../holiday.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-regdetails',
  templateUrl: './regdetails.component.html',
  styleUrls: ['./regdetails.component.css']
})
export class RegdetailsComponent implements OnInit {
  Basic: any = [];
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
 
}
