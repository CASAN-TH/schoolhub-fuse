import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { StudentFormComponent } from './student-form/student-form.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  dialogRef: any;
  searchInput: FormControl;

  constructor(
    public dialog: MatDialog,
    private _matDialog: MatDialog
  ) {
    this.searchInput = new FormControl('');
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentFormComponent, {
      panelClass: 'student-form-dialog',
      data      : {
        action: 'new'
    }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
