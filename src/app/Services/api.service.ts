import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { teacher } from '../Model/classroom';

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
    return this.http.get(`${environment.apiUrl}Classroom/GetdataTeacherAll`)
  }
  //Teacher ID
  public getDataTeacherById(teacherId: string) {
    return this.http.get(`${environment.apiUrl}​GetdataTeacherByid​/${teacherId}`)
  }
  // Add Teacher
  public addDataTeacher(teacherId : string) {
    return this.http.post(`${environment.apiUrl}Classroom/AddDataTeacher`, teacherId)
  }
  // Edit Teacher
  editDataTeacher(teacherId: any) {
    return this.http.put(`${environment.apiUrl}Classroom/EditDataTeacher`, teacherId);
  }
  // Delete Teacher
  deleteDataTeacher(teacherId: string) {
    return this.http.delete(`${environment.apiUrl}Classroom/DeleteDataTeacher/${teacherId}`);
  }
 



  //Classroom
  public getDataClassroom() {
    return this.http.get(`${environment.apiUrl}Classroom/GetdataClassroomAll`)
  }
}
