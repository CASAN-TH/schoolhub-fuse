import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../students.module';

@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  studentForm: FormGroup;
  action: string;
  students: Student;
  dialogTitle: string;

  student = {
    room: "",
    studentnumber: "",
    studentid: "",
    prefix: "",
    firstname: "",
    lastname: "",
    identificationnumber: "",
    attendancedate: {
      day: "",
      month: "",
      year: ""
    },
    oldschool: "",
    province: "",
    lastfloor: "",
    birthday: {
      day: "",
      month: "",
      year: ""
    },
    sex: "",
    nationality: "",
    religion: "",
    fatherfullname: "",
    motherfullname: "",
    pp1set: "",
    pp1number: "",
    pp2number: "",
    enddateofapproval: {
      day: "",
      month: "",
      year: ""
    },
    approvaldate: {
      day: "",
      month: "",
      year: ""
    },
    cause: ""
  };
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    public matDialogRef: MatDialogRef<StudentFormComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any
  ) { 
     // Set the defaults
     this.action = _data.action;

     if ( this.action === 'edit' )
     {
         this.dialogTitle = 'Edit Students';
         this.students = _data.students;
     }
     else
     {
         this.dialogTitle = 'New Students';
         this.students = new Student({});
     }

     this.studentForm = this.createStudentsForm();
   }

  ngOnInit() {
    // this.studentForm = this._formBuilder.group({
    //   room: ['', Validators.required],
    //   studentnumber: ['', Validators.required],
    //   studentid: ['', Validators.required],
    //   prefix: ['', Validators.required],
    //   firstname: ['', Validators.required],
    //   lastname: ['', Validators.required],
    //   identificationnumber: ['', Validators.required],
    //   attendancedate: ['', Validators.required],
    //   oldschool: ['', Validators.required],
    //   province: ['', Validators.required],
    //   lastfloor: ['', Validators.required],
    //   birthday: ['', Validators.required],
    //   sex: ['', Validators.required],
    //   nationality: ['', Validators.required],
    //   religion: ['', Validators.required],
    //   fatherfullname: ['', Validators.required],
    //   motherfullname: ['', Validators.required],
    //   pp1set: ['', Validators.required],
    //   pp1number: ['', Validators.required],
    //   pp2number: ['', Validators.required],
    //   enddateofapproval: ['', Validators.required],
    //   approvaldate: ['', Validators.required],
    //   cause: ['', Validators.required]
    // });
  }

  createStudentsForm(): FormGroup {
    return this._formBuilder.group({
      id: [this.students.id],
      avatar  : [this.students.avatar],
      room: [this.students.room],
      studentnumber: [this.students.studentnumber],
      studentid: [this.students.studentid],
      prefix: [this.students.prefix],
      firstname: [this.students.firstname],
      lastname: [this.students.lastname],
      identificationnumber: [this.students.identificationnumber],
      attendancedate: [this.students.attendancedate],
      oldschool: [this.students.oldschool],
      province: [this.students.province],
      lastfloor: [this.students.lastfloor],
      birthday: [this.students.birthday],
      sex: [this.students.sex],
      nationality: [this.students.nationality],
      religion: [this.students.religion],
      fatherfullname: [this.students.fatherfullname],
      motherfullname: [this.students.motherfullname],
      pp1set: [this.students.pp1set],
      pp1number: [this.students.pp1number],
      pp2number: [this.students.pp2number],
      enddateofapproval: [this.students.enddateofapproval],
      approvaldate: [this.students.approvaldate],
      cause: [this.students.cause]
    });
  }

}
