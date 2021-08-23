import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { student } from 'src/app/Model/classroom';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentId: any;
  dataStudent: any;
  data: any;
  getData: any;
  statusbtn: boolean = false

  constructor( form: FormBuilder, public callApi: ApiService) {
    this.data = form.group({
      studentName: [null, [Validators.required]],
      studentAge: [null, [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(1), Validators.maxLength(2)]],
      studentTel: [null, [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]]
    })
  }
  get formcontroldata() { return this.data.controls }

  add() {
    this.statusbtn = true
    console.log(this.data.valid);
    console.log(this.data.value);
    if (this.data.valid == true) {
      this.addDataStudent();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'สำเร็จ!',
        text: 'เพิ่มข้อมูล Student สำเร็จ',
        timer: 300000,

      })
      
    }

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

  addDataStudent() {
    this.callApi.addDataStudent(this.data.value).subscribe(data => {
      window.location.reload();
      this.getStudentAll()
      console.log(data);
      
    })
  }

  deleteDataStudent(studentId: string) {
    this.callApi.deleteDataStudent(studentId).subscribe(data => {
      this.getStudentAll()
      console.log("ลบข้อมูลนักศึกษาสำเร็จ");
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'สำเร็จ!',
        text: 'ลบข้อมูล student สำเร็จ ',
        timer: 30000
      })
    })
  }


  editDataStudent() {
    this.callApi.editDataStudent(this.data).subscribe(data => {
      this.getStudentAll()
      console.log("แก้ไขข้อมูลนักศึกษาสำเร็จ")
    })

  }
  

  getDataStudentById(studentId: string) {
    this.callApi.getDataStudentById(studentId).subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }
}
