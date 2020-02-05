import { Component, OnInit } from '@angular/core';
import { StudentsData } from '../../models/app.data.constants';
import { Student } from '../../models/app.student.model';
import { CommunicationService } from '../../../servmodule/services/app.communication.service';

@Component({
  selector: 'app-studentreceiver-component',
  template: ` 
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
    
  ` 
})
export class StudentReceiverComponent implements OnInit {
  
  students = StudentsData;
    uname: string;
  private filteredStudents: Array<Student>;

   

  constructor(private serv: CommunicationService) { 
    this.uname = '';
    this.filteredStudents = new Array<Student>();
    
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

  // subscribe to the event only once 
  ngOnInit(): void { 
      this.serv.notify.subscribe((uname: string)=> {
         this.uname = uname;
      });
  }
   
}
