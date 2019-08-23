import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule, FuseMaterialColorPickerModule } from '@fuse/components';

const routes = [
  {
    path     : '',
    component: CoursesComponent,
    canActivate: [AuthenGuardService]
  }
];
@NgModule({
  declarations: [CoursesComponent],
  imports: [
    RouterModule.forChild(routes),
    MatIconModule,

    FuseSharedModule,
    FuseConfirmDialogModule,
    FuseMaterialColorPickerModule
  ]
})
export class CoursesModule { }
