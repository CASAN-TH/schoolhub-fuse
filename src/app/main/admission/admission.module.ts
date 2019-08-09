import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { AdmissionListComponent } from './admission-list/admission-list.component';
import { AdmissionDetailComponent } from './admission-detail/admission-detail.component';
import { FormsModule } from '@angular/forms';

import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { MatTableModule } from '@angular/material';


import { MatRowKeyboardSelectionModule } from 'mat-row-keyboard-selection';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';

const routes = [
  {
    path     : '',
    component: AdmissionListComponent,
    canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [AdmissionListComponent, AdmissionDetailComponent],
  imports: [
    RouterModule.forChild(routes),

    TranslateModule,

    FuseSharedModule,
    MatTableModule,

    MatRowKeyboardSelectionModule,

    WjInputModule, WjGridModule,  FormsModule
  ],
  exports: [AdmissionListComponent, AdmissionDetailComponent]
})
export class AdmissionModule { }
