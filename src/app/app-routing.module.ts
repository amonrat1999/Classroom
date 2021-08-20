import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomComponent } from './Components/classroom/classroom.component';
import { StudentComponent } from './Components/student/student.component';
import { TeacherComponent } from './Components/teacher/teacher.component';

const routes: Routes = [
  { path: '' , redirectTo: 'classroom',pathMatch: 'full'},
  { path: 'student' , component: StudentComponent},
  { path: 'teacher' , component: TeacherComponent},
  { path: 'classroom' , component: ClassroomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
