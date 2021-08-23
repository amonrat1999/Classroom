import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';
import { teacher } from 'src/app/Model/classroom';
// import { teacher } from 'src/app/Model/classroom';
// import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  getDataTeacher: any
  data: any;
  statusbtn: boolean = false;
  teacherId: any;


  constructor(public http: HttpClient, public callApi: ApiService, form: FormBuilder) {
    this.data = form.group({
      teacherName: [null, [Validators.required, Validators.pattern('[a-z A-Z ]*')]],
      teacherTel: [null, [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]],
      subjectTaught: [null, [Validators.required, Validators.pattern('[a-z A-Z]*')]]
    })
  }

  get formcontroldata() { return this.data.controls }

  add() {
    this.statusbtn = true;
    console.log(this.data.valid);
    console.log(this.data.value);
    if (this.data.valid == true) {
      this.addDataTeacher();
      Swal.fire({
        icon: 'success',
        title: 'สำเร็จ',
        text: 'เพิ่มข้อมูล Teacher สำเร็จ',
        timer: 1000
      })
      this.getTeacherAll();
    }
  }

  ngOnInit(): void {
    this.getTeacherAll();
  }


  // Teacher All
  getTeacherAll() {
    this.callApi.getDataTeacherAll().subscribe(data => {
      console.log(data);
      this.getDataTeacher = data;
    })
  }

  //ค้นหา teacher ด้วย id
  getDataTeacherById(teacherId: string) {
    this.callApi.getDataTeacherById(teacherId).subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }

  // Add Teacher
  addDataTeacher() {
    this.callApi.addDataTeacher(this.data.value).subscribe(data => {
      this.getTeacherAll();
      console.log(data);
    })
  }

  // Edit Teacher
  editDataTeacher() {
    this.callApi.editDataTeacher(this.data).subscribe(data => {
      this.getTeacherAll();
      console.log(data);
      
    })
    console.log("แก้ไขข้อมูลสำเร็จแล้ว");
  }

  // Delete Teacher
  deleteDataTeacher(teacherId) {
    this.callApi.deleteDataTeacher(teacherId).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'สำเร็จ',
        text: 'ลบข้อมูล Teacher สำเร็จ',
        timer: 1000
      })
      console.log("ลบข้อมูลสำเร็จแล้ว");
      this.getTeacherAll();
    })

  }

}
