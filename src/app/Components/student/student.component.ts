import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { student } from 'src/app/Model/classroom';
import { ApiService } from 'src/app/Services/api.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  @Input() clickButton:Function;
  student: student;
  dataStudent: any;

  constructor(public http: HttpClient , public callApi: ApiService ) {
  }

  ngOnInit(): void {
    this.getStudentAll();
  }

  getStudentAll(){
    this.callApi.getDataStudentAll().subscribe( data =>{
      console.log(data);
      this.dataStudent = data;
    })
  }
}
