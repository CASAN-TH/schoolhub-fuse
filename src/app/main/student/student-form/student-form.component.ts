import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  
  studentForm: FormGroup;
  action: string;
  dialogTitle: string;

  constructor(
    public dialogRef: MatDialogRef<StudentFormComponent>,
    private _formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
