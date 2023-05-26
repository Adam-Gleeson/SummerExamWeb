import { Component } from '@angular/core';
import { MockapiService } from './mockapi.service';
import { InterfaceStaffTs } from './interface-staff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SummerExamWeb';
  results: InterfaceStaffTs[] = [];
  private _mockapi: MockapiService; 
  studentName = "Adam Gleeson";
  studentNumber = "S00221503";
  apiLink = "https://6470a0a63de51400f724ab48.mockapi.io/api/v1/staffDetails";

  constructor(mockapi: MockapiService) {
    this._mockapi = mockapi;
  }

  getStaff(): boolean {
    this._mockapi.getStaffDetails().subscribe(
      staffData => {
        this.results=staffData;
        console.log(this.results);
      }
    )
    return false;
  }

  ngOnInit(): void {
    this.getStaff();
  }
}
