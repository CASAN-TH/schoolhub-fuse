import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from './school.component';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';



const routes = [
  {
    path     : '',
    component: SchoolComponent,
    canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [SchoolComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

    FuseSharedModule
  ]
})
export class SchoolModule { }
