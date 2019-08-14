import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SchoolComponent } from '../school/school.component';


@Component({
  selector: 'app-schooldialog',
  templateUrl: './schooldialog.component.html',
  styleUrls: ['./schooldialog.component.scss']
})
export class SchooldialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SchoolComponent, {
      width: "1000px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("openDialog");
    });
  }

}
