import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { SchoolService } from './school.service';


@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  schoolForm: FormGroup;
  school = {
    schoolname: "",
    under: "",
    area: "",
    subdistric: "",
    distric: "",
    province: "",
    registrar: "",
    position: "",
    direction: "",
    positions: ""
  };

  constructor(public dialogRef: MatDialogRef<SchoolComponent>,
    private sch: SchoolService, 
    private _formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.schoolForm = this._formBuilder.group({
      schoolname: ['', Validators.required],
      under: ['', Validators.required],
      area: ['', Validators.required],
      subdistric: ['', Validators.required],
      distric: ['', Validators.required],
      province: ['', Validators.required],
      registrar: ['', Validators.required],
      position: ['', Validators.required],
      direction: ['', Validators.required],
      positions: ['', Validators.required]
    });
  }

  onSaveSchool() {
    this.sch.saveSchool(this.school);
    this.sch.savedschool.subscribe((res: any) => {
      if (res.status == 200) {
        console.log(res);
        alert("เพิ่มข้อมูลสำเร็จ");
        this.dialogRef.close()
        this.router.navigate(['/collaborator', { schoolId: JSON.stringify(res.data._id), si: false }]);
      }
    })
  }
}
