import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'collaborator-list',
  templateUrl: './collaborator-list.component.html',
  styleUrls: ['./collaborator-list.component.scss']
})
export class CollaboratorListComponent implements OnInit {
  dataSource: null;
  displayedColumns = ['avatar', 'email', 'phone', 'jobTitle', 'buttons'];

  constructor() { }

  ngOnInit() {
  }

}
