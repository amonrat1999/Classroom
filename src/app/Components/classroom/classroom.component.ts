import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  constructor(public http: HttpClient, public callApi: ApiService) { }

  ngOnInit(): void {
    this.getClassroomAll();
  }


  getClassroomAll() {
    this.callApi.getDataClassroom().subscribe(data => {
      console.log(data);

    })
  }
}
