import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Student} from '../../models/app.student.model';
import {Universities, Courses} from '../../models/app.constants';
import { StudentLogic } from '../../models/app.student.logic';
import { EvenValidator, UniqueValidator } from './app.custom.validator';

@Component({
  selector: 'app-studentreactiveform-component',
  templateUrl: './app.studentreactiveform.view.html' 
})
export class StudentReactiveFormComponent implements OnInit {
  // OnInit is a Component Lifecycle Method interface

  student: Student;
  private logic: StudentLogic;
  students: Array<Student>;

  tableColumns: Array<string>;

  // define fromGroup
  frmStudent: FormGroup;


  // store constants in local public members
  courses = Courses;
  universities = Universities;

  constructor() { 
    this.student = new Student(0,'','','','');
    this.students  = new Array<Student>();
    this.logic = new StudentLogic();
    this.tableColumns = new Array<string>();

    // define FormGroup instance and map it with Model Object (Student)
    // by defining Key/Value pair for Model Class properties with FormCOntrol
    // the 'key' will be used for 'formControleName' attribute of 
    // form-elements
    this.frmStudent = new FormGroup({
      StudentRowId: new FormControl(this.student.StudentRowId,
          Validators.compose([
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(6),
            Validators.pattern('[0-9]+'),
            EvenValidator.checkEven,
            UniqueValidator.checkUnique
          ])),
      StudentId: new FormControl(this.student.StudentId),
      StudentName: new FormControl(this.student.StudentName),
      CourseName: new FormControl(this.student.CourseName),
      UniversityName: new FormControl(this.student.UniversityName)
    });  
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
    // read the formmodel aka FormGroup data and pass it to
    // the Model class
    this.student = this.frmStudent.value;
    this.students =  this.logic.addStudent(this.student);
    console.log(JSON.stringify(this.students));
  }
  getSelectedStudent(std: Student): void {
    this.student = Object.assign({}, std);
  }
}
