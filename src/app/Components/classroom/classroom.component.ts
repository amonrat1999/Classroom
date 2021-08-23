import { classroom, teacher, student } from './../../Model/classroom';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  statusbtn: boolean = false;

  form: any = {
    classroomId: null,
    classroomName: null,
    classStudent: null,
    classTeacher: null
  }


  @Input() clickButton: Function;
  classroom: classroom;


  constructor(public http: HttpClient, public callApi: ApiService, data: FormBuilder) {
    this.form = data.group({
      classroomName: [null, [Validators.required, Validators.pattern('[a-z A-Z 0-9]*')]]
    })
  }

  get formcontroldata() {
    return this.form.controls
  }

  add() {
    this.statusbtn = true
    console.log(this.form.invalid);
    console.log(this.form.value);

    if (this.form.valid == true) {
      console.log(this.form.value);
      console.log(this.form);

      this.createClassroom()

    }
  }

  Swal() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'ลบข้อมูลสำเร็จแล้ว',
      timer: 3000
    })
  }


  dataClassroom: any
  dataStudent: any
  dataTeacher: any

  ngOnInit(): void {
    this.getClassroomAll()
    this.getDataStudent()
    this.getDataTeacher()
  }


  getClassroomAll() {
    this.callApi.getDataClassroom().subscribe(data => {
      console.log(data)
      this.dataClassroom = data

    })
  }

  createClassroom() {
    this.callApi.createClassroom(this.form.value).subscribe(data => {
      console.log(data)
      this.getClassroomAll()
    })
  }

  getDataStudent() {
    this.callApi.getDataStudentAll().subscribe(data => {
      console.log(data)
      this.dataStudent = data
    })
  }

  getDataTeacher() {
    this.callApi.getDataTeacherAll().subscribe(data => {
      console.log(data)
      this.dataTeacher = data
    })
  }

  addTeacherInClassroom(classroomId: string, teacherId: string) {
    this.form.classroomId = classroomId
    this.form.teacherId = teacherId
    this.callApi.addTeacherInClassroom(this.form.classroomId, this.form.teacherId).subscribe(data => {
      this.dataClassroom()
      this.getClassroomAll()
      console.log(data)
    })
  }

  addStudentInClassroom(classroomId: string, studentId: string) {
    this.form.classroomId = classroomId
    this.form.studentId = studentId
    this.callApi.addStudentInClassroom(this.form.classroomId, this.form.studentId).subscribe(data => {
      this.dataClassroom()
      this.getClassroomAll()
      console.log(data)
    })
  }

  deleteClassroom(classroomId: string) {
    this.callApi.deletedClassroom(classroomId).subscribe(data => {
      console.log(data)
      this.getClassroomAll()
      this.Swal()
    })
  }
}
