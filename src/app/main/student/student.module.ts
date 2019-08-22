import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { MatIconModule, MatTableModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';
import { MainComponent } from './sidebar/main/main.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
      path     : '**',
      component: StudentComponent,
  }
];

@NgModule({
  declarations: [StudentComponent, MainComponent, StudentListComponent],
  imports: [
    RouterModule.forChild(routes),
    
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,

    FuseSharedModule,
    FuseConfirmDialogModule,
    FuseSidebarModule
  ],
  entryComponents:[StudentComponent]
})
export class StudentModule { }
