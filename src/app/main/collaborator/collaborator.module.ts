import { NgModule } from '@angular/core';
import { CollaboratorComponent } from './collaborator.component';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule, MatListModule, MatDatepickerModule, MatMenuModule, MatRippleModule, MatToolbarModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatCardModule} from '@angular/material/card';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';


const routes = [
  {
    path     : '',
    component: CollaboratorComponent,
    canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [CollaboratorComponent],
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatMenuModule,
    MatRippleModule,
    MatTableModule,
    MatToolbarModule,

    FuseConfirmDialogModule,
    FuseSidebarModule,
    FuseSharedModule
  ]
})
export class CollaboratorModule { }
