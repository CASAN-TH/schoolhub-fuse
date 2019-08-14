import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorComponent } from './collaborator.component';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatCardModule} from '@angular/material/card';


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
    MatTableModule,

    FuseSharedModule
  ]
})
export class CollaboratorModule { }
