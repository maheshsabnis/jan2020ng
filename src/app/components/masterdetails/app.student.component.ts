import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { StudentsData } from './../../models/app.data.constants';
import { Student } from '../../models/app.student.model';
@Component({
  selector: 'app-student-component',
  template: ` 
      <h2>List of Students from {{Uname}} University</h2>
     <table class="table table-bordered table-striped">
       <thead>
          <tr>
            <th>Student Row Id</th>
            <th>Student Id</th>
            <th>Student Name</th>
            <th>Course Name</th>
            <th>University Name</th>
          </tr>
       </thead>
       <tbody>
         <tr *ngFor="let s of FilteredStudents">
            <td>{{s.StudentRowId}}</td>
            <td>{{s.StudentId}}</td>
            <td>{{s.StudentName}}</td>
            <td>{{s.CourseName}}</td>
            <td>{{s.UniversityName}}</td>
         </tr>
       </tbody>
     </table>
     <br>
     <input type="button" class="btn btn-warning" value="Notify Back" (click)="onNotifyBackToParent()">
  ` 
})
export class StudentComponent implements OnInit {
  
  students = StudentsData;
  private uname: string;
  private filteredStudents: Array<Student>;

  // the event-emitter will emit the event with Payload
  // the listener must subscribe to the event to read payload data
  // the listener must use 'event-binding' to subscribe (notify)
  @Output()
  notify: EventEmitter<string>;

  constructor() { 
    this.uname = '';
    this.filteredStudents = new Array<Student>();
    this.notify = new EventEmitter<string>();
  }

  @Input() // this will make the property enable for Property-Binding [Uname]
  set Uname(val: string) {
    console.log(this.uname);
    this.uname = val;
  }
  get Uname(): string {
    return this.uname;
  }

  get FilteredStudents(): Array<Student> {
    this.filteredStudents = new Array<Student>();
    if(this.uname.length > 0) {
      this.filteredStudents = this.students.filter((s,i) => {
        return s.UniversityName === this.uname;
      });
    } else {
      this.filteredStudents =  this.students;
    }
    return this.filteredStudents;
  }

  ngOnInit(): void { }

  onNotifyBackToParent(): void {
    this.notify.emit(`We found ${this.filteredStudents.length} students in University ${this.Uname}`)
  }
}
