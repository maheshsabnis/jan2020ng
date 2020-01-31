import { Student } from './app.student.model';

export class StudentLogic {
  private students: Array<Student>;
  constructor()  {
    this.students = new Array<Student>();
    this.loadData();
  }
  private loadData(): void {
    this.students.push(new Student(101,'S101','James', 'Pathology', 'Yale'));
    this.students.push(new Student(102,'S102','Ethan', 'Physiotherapiest', 'Oklahama'));
    this.students.push(new Student(103,'S103','Jones', 'Lab-Assistent', 'Seattle'));
    this.students.push(new Student(104,'S104','Bourne', 'Lab-Technician', 'Oxford'));
  }
  getStudents(): Array<Student> {
    return this.students;
  }
  addStudent(std: Student): Array<Student> {
    this.students.push(std);
    return this.students;
  }
}
