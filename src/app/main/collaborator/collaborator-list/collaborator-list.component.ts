import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'app/main/school/school.service';
import { ActivatedRoute } from '@angular/router';
import { CollaboratorService } from '../collaborator.service';
import { FormBuilder } from '@angular/forms';

export interface Students {

  email: string;
  schoolid: string;
  
}
const contact: Students[] = [
  {
    'email': 'abbott@withinpixels.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'porapot@gmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'stp@gmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  },
  {
    'email': 'smx@hotmail.com',
    'schoolid': '5d5b7c7f066dda001a8c28b4'
  }
];

@Component({
  selector: 'collaborator-list',
  templateUrl: './collaborator-list.component.html',
  styleUrls: ['./collaborator-list.component.scss']
})
export class CollaboratorListComponent implements OnInit {

  collaborators = [];
  collaborator = {
    email: ""
  }


  dataSource: any;
  displayedColumns = [ 'email','schoolid','buttons'];


  constructor(private collab: CollaboratorService) { }

  ngOnInit() {
    this.dataSource = contact;
    
  }

  // getList() {
  //   this.collab.getlist();
  //   this.collab.gettinglist.subscribe((res: any) => {
  //     if (res.status == 200) {
  //       this.collaborators = res.data;
  //     }
  //   })
  // }

  // onDelete(_id) {
  //   //console.log(_id);
  //   this.collab.delete(_id);
  //   this.collab.deleted.subscribe((res: any) => {
  //     if (res.status == 200) {
  //       this.getList();
  //     }
  //   })
  // } 
}

