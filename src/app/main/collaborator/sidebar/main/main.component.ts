import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SchoolService } from 'app/main/school/school.service';
import { ActivatedRoute } from '@angular/router';
import { CollaboratorService } from '../../collaborator.service';

@Component({
  selector: 'collaborator-main-sidebar',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  collaboratorForm: FormGroup;
  collaborators = [];
  collaborator = {
    email: ""
  }
  filterBy: string;

  constructor(
    private sch: SchoolService,
    private route: ActivatedRoute,
    private collab: CollaboratorService,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.filterBy = 'all';
    // let _id = this.route.snapshot.paramMap.get('schoolId');
    // this.schoolId = JSON.parse(_id);
    // console.log(this.schoolId);
    this.collaboratorForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]

    });
    console.log(JSON.parse(window.localStorage.getItem("schoolinfo")));
    this.getList();
  }
  changeFilter(filter) : void
  {
    this.filterBy = filter;
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