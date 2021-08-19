import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }


  public  getDataStudentAll(){
    return this.http.get(`${environment.apiUrl}Classroom​/GetdataStudentAll`)
  }
}
