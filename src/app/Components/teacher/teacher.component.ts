
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teacherId: any;
  dataTeacher: any;
  data: any;
  getData: any;
  statusbtn: boolean = false

  constructor(public form: FormBuilder, public callApi: ApiService) {
    this.data = form.group({
      teacherName: [null, [Validators.required]],
      teacherTel: [null, [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(1), Validators.maxLength(2)]],
      subjectTaught: [null, [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]]
    })
  }
  get formcontroldata() { return this.data.controls }

  add() {
    this.statusbtn = true
    console.log(this.data.valid);
    console.log(this.data.value);
    if (this.data.valid == true) {
      this.addDataTeacher();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'สำเร็จ!',
        text: 'เพิ่มข้อมูล Teacher สำเร็จ',
        timer: 300000,
      })
    }
  }


  ngOnInit(): void {
    this.getDataTeacherAll();
  }



  getDataTeacherAll(){
    this.callApi.getDataTeacherAll().subscribe( data =>{
      console.log(data);
      this.dataTeacher = data;
    })
  }

  addDataTeacher() {
    this.callApi.addDataTeacher(this.data.value).subscribe(data => {
      window.location.reload();
      this.getDataTeacherAll()
      console.log(data);
      
    })
  }

  deleteDataTeacher(teacherId: string) {
    this.callApi.deleteDataTeacher(teacherId).subscribe(data => {
      this.getDataTeacherAll()
      console.log("ลบข้อมูลนักศึกษาสำเร็จ");
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'สำเร็จ!',
        text: 'ลบข้อมูล Teacher สำเร็จ ',
        timer: 30000
      })
    })
  }


  editDataTeacher() {
    this.callApi.editDataTeacher(this.data).subscribe(data => {
      this.getDataTeacherAll()
      console.log("แก้ไขข้อมูลนักศึกษาสำเร็จ")
    })

  }
  

  getDataTeacherById(teacherId: string) {
    this.callApi.getDataTeacherById(teacherId).subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }
}
