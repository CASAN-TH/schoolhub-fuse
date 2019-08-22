import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  searchInput: FormControl;
  
  constructor() {
    this.searchInput = new FormControl('');
   }

  ngOnInit() {
  }

}
