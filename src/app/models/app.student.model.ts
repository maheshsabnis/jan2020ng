export class University {
  constructor(
    public UniversityRowId: number,
    public UniversityId: string,
    public UniversityName: string,
    public Location: string
  ){}
}
export class Student {
  constructor(
    public StudentRowId: number,
    public StudentId: string,
    public StudentName: string,
    public CourseName: string,
    public UniversityName: string
  ){}
}
