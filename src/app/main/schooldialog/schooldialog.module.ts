import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchooldialogComponent } from './schooldialog.component';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SchoolComponent } from '../school/school.component';


const routes = [
  {
    path     : '',
    component: SchooldialogComponent,
    canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [SchooldialogComponent, SchoolComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

    FuseSharedModule
  ],
  entryComponents:[SchoolComponent]
})
export class SchooldialogModule { }
