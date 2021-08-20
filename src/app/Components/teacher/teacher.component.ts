import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  getDataTeacher: any

  constructor(public http: HttpClient , public callApi: ApiService) { }

  ngOnInit(): void {
    this.getTeacherAll();
  }

  getTeacherAll(){
    this.callApi.getDataTeacherAll().subscribe( data =>{
      console.log(data);
      this.getDataTeacher = data;
    })
  }
}
