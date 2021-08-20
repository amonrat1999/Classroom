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
}
