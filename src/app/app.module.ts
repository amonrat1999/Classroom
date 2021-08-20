import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Materail
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './Components/student/student.component';
import { TeacherComponent } from './Components/teacher/teacher.component';
import { ClassroomComponent } from './Components/classroom/classroom.component';
import { NavbarComponent } from './Components/navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    ClassroomComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
