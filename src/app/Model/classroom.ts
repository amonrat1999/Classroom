export interface student{
  studentId: string
  studentName: string
  studentAge: number
  studentTel: string
}

export interface teacher {
  teacherId: string
  teacherName: string
  teacherTel: string
  subjectTaught: string
}

export interface classroom{
  classroomId: string
  classroomName: string
  classroomStudent: student
  classroomTeacher: teacher
}
