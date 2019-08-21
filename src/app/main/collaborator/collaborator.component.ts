import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { CollaboratorService } from './collaborator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from '../school/school.service';



@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  collaboratorForm: FormGroup;
  collaborators = [];
  collaborator = {
    email: ""
  }

  // schoolId: any;
  constructor(
    private sch: SchoolService,
    private route: ActivatedRoute,
    private collab: CollaboratorService,
    private _formBuilder: FormBuilder, ) { }

  ngOnInit() {
    // let _id = this.route.snapshot.paramMap.get('schoolId');
    // this.schoolId = JSON.parse(_id);
    // console.log(this.schoolId);
    this.collaboratorForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]

    });
    console.log(JSON.parse(window.localStorage.getItem("schoolinfo")));
    this.getList();
  }
  onAddCollaborator() {
    this.collab.create(this.collaborator);
    this.collab.created.subscribe((res: any) => {
      if (res.status == 200) {
        this.getList();

      }
    })
  }
  getList() {
    this.collab.getlist();
    this.collab.gettinglist.subscribe((res: any) => {
      if (res.status == 200) {
        this.collaborators = res.data;
      }
    })
  }

  onDelete(_id) {
    //console.log(_id);
    this.collab.delete(_id);
    this.collab.deleted.subscribe((res: any) => {
      if (res.status == 200) {
        this.getList();
      }
    })
  }


}
