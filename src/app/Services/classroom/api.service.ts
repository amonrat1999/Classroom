import { student } from './../../Model/classroom';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }


  public  getDataStudentAll(){
    return this.http.get (`${environment.apiUrl}Classroom/GetdataStudentAll`)
  }

  public getdataStudentByid(studentId: string){
    return this.http.get (`${environment.apiUrl}GetdataStudentByid/${studentId}`)
  }

  public addDataStudent(studentId: student){
    return this.http.post (`${environment.apiUrl}Classroom/AddDataStude`,studentId)
  }

  public editDataStudent(studentId: student){
    return this.http.put (`${environment.apiUrl}Classroom/EditDataStudent`,studentId)
  }

  public deleteDataStudent(studentId: string){
    return this.http.delete (`${environment.apiUrl}DeleteDataStudent/${studentId}`)
  }





}
