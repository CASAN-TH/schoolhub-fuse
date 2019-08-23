import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'student-main-sidebar',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  filterBy: string;

  constructor() { }

  ngOnInit() {
    this.filterBy = 'all';
  }
  changeFilter(filter): void
  {
      this.filterBy = filter;
  }

}
