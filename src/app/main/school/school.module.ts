import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from './school.component';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule, } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';



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
    
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,

    FuseSharedModule,
    FuseConfirmDialogModule,
    FuseSidebarModule
    
  ]
})
export class SchoolModule { }
