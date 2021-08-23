import { classroom, teacher, student } from './../Model/classroom';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  //student
  public getDataStudentAll() {
    return this.http.get(`${environment.apiUrl}Classroom/GetdataStudentAll`)
  }


  //Teacher
  public getDataTeacherAll() {
    return this.http.get(`${environment.apiUrl}Classroom/GetdataTeacherAll`)
  }


  //Classroom
  public getDataClassroom() {
    return this.http.get(`${environment.apiUrl}Classroom/GetdataClassroomAll`)
  }

  //ClassroomByid
  public getdataClassroomByid(classroomId: classroom) {
    return this.http.get(`${environment.apiUrl}Classroom/GetdataClassroomByid/${classroomId}`)
  }

  //CreateClassroom
  public createClassroom(classroom: classroom){
    return this.http.post(`${environment.apiUrl}Classroom/CreateClassroom`,classroom)
  }

  //AddTeacherInClassroom
  public addTeacherInClassroom(classroomId: classroom, teacherId:teacher){
    return this.http.get(`${environment.apiUrl}Classroom/AddTeacherInClassroom/${classroomId}/${teacherId}`)
  }

  //AddStudentInClassroom
  public addStudentInClassroom(classroomId: classroom, studentId:student){
    return this.http.get(`${environment.apiUrl}Classroom/AddStudentInClassroom/${classroomId}/${studentId}`)
  }

  //DeletedClassroom
  public deletedClassroom(classroomId: string){
    return this.http.delete(`${environment.apiUrl}Classroom/DeletedClassroom/${classroomId}`)
  }
}
