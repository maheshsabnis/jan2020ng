import { Component, OnInit } from '@angular/core';
import { UniversitiesData } from './../../models/app.data.constants';
import { University } from '../../models/app.student.model';
@Component({
  selector: 'app-university-component',
  template: ` 
    <div class="container">{{message}}</div>
     <table class="table table-bordered table-striped">
       <thead>
          <tr>
            <th>University Row Id</th>
            <th>University Id</th>
            <th>University Name</th>
            <th>Location</th>
          </tr>
       </thead>
       <tbody>
         <tr *ngFor="let u of universities" (click)="getSelectedUniversityName(u)">
            <td>{{u.UniversityRowId}}</td>
            <td>{{u.UniversityId}}</td>
            <td>{{u.UniversityName}}</td>
            <td>{{u.Location}}</td>
         </tr>
       </tbody>
     </table>
     <hr>
     <app-student-component [Uname]="university.UniversityName"
       (notify)="getNotification($event)"></app-student-component>
  ` 
})
export class UniversityComponent implements OnInit {
  
  universities = UniversitiesData;
  university: University;
  message: string;
  constructor() { 
    this.university = new University(0,'','','');
    this.message = "";
  }

  ngOnInit(): void { }
  getSelectedUniversityName(uni: University): void {
    this.university = uni;
  }
  getNotification(event): void {
    this.message = event;
  }
}
