import { Component, OnInit } from '@angular/core';
import {Student} from './../../models/app.student.model';
import {Universities, Courses} from './../../models/app.constants';
import { StudentLogic } from '../../models/app.student.logic';

@Component({
  selector: 'app-studentform-component',
  templateUrl: './app.studentform.view.html' 
})
export class StudentFormComponent implements OnInit {
  // OnInit is a Component Lifecycle Method interface

  student: Student;
  private logic: StudentLogic;
  students: Array<Student>;

  tableColumns: Array<string>;

  // store constants in local public members
  courses = Courses;
  universities = Universities;

  constructor() { 
    this.student = new Student(0,'','','','');
    this.students  = new Array<Student>();
    this.logic = new StudentLogic();
    this.tableColumns = new Array<string>();
  }

  // method immediately invoked after ctor
  ngOnInit(): void {
    // iterate over all public members of Student class
    // and add them in the  tableColumns array
    for(let c in this.student) {
       this.tableColumns.push(c);
    }

    this.students =this.logic.getStudents();

  }

  clear(): void {
    this.student = new Student(0,'','','','');
  }
  save(): void {
    this.students =  this.logic.addStudent(this.student);
    console.log(JSON.stringify(this.students));
  }
  getSelectedStudent(evt): void {
     this.student = Object.assign({}, evt);
  }
}
