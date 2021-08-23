import { classroom, teacher, student } from './../Model/classroom';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  // student
  public getDataStudentAll() {
    return this.http.get(`${environment.apiUrl}Classroom/GetdataStudentAll`)
  }
  // stdent ID
  public getDataStudentById(studentId: string) {
    return this.http.get(`${environment.apiUrl}Classroom/GetDataStudentById/${studentId}`);
  }
  // stdent Add
  public addDataStudent(studentId: string) {
    return this.http.post(`${environment.apiUrl}Classroom/AddDataStudent`, studentId);
  }
  // stdent Delete
  public deleteDataStudent(studentId: string) {
    return this.http.delete(`${environment.apiUrl}Classroom/DeleteDataStudent/${studentId}`);
  }
  // stdent Edit
  public editDataStudent(studentId: string) {
    return this.http.put(`${environment.apiUrl}Classroom/EditDataStudent`, studentId)
  }


  //Teacher
  public getDataTeacherAll() {
    // return this.http.get(`${environment.apiUrl}Classroom/GetdataTeacherAll`)
    return this.http.get(`${environment.apiUrl}Classroom/GetdataTeacherAll`);
  }
  //Teacher ID
  public getDataTeacherById(teacherId: string) {
    // return this.http.get(`${environment.apiUrl}Classroom/GetdataTeacherByid/${teacherId}`);
    return this.http.get(`${environment.apiUrl}Classroom/GetdataTeacherByid/${teacherId}`);
  }
  // Add Teacher
  public addDataTeacher(teacherId : string) {
    // return this.http.post(`${environment.apiUrl}Classroom/AddDataTeacher`, teacherId);
    return this.http.post(`${environment.apiUrl}Classroom/AddDataTeacher`, teacherId);
  }
  // Edit Teacher
  editDataTeacher(teacherId: any) {
    // return this.http.put(`${environment.apiUrl}Classroom/EditDataTeacher`, teacherId);
    return this.http.put(`${environment.apiUrl}Classroom/EditDataTeacher`, teacherId);
  }
  // Delete Teacher
  deleteDataTeacher(teacherId: string) {
    // return this.http.delete(`${environment.apiUrl}Classroom/DeleteDataTeacher/${teacherId}`);
    return this.http.delete(`${environment.apiUrl}Classroom/DeleteDataTeacher/${teacherId}`);
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
