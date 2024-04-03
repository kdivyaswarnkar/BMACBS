import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  private apiUrl = 'http://localhost:60453/api/';

  constructor(private http: HttpClient) { }

  getHolidays(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'Holidaylist');
  }

  getStaff(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'staff');
  }

  getBasic(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'basicStatastics');
  }

  getschemes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'Schemes');
  }
  insertFeedback(feedbackData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'Feedback', feedbackData);
  }

}
