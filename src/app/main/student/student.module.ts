import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { MatIconModule, MatTableModule, MatMenuModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatDatepickerModule, MatInputModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';
import { MainComponent } from './sidebar/main/main.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  {
      path     : '**',
      component: StudentComponent,
  }
];

@NgModule({
  declarations: [StudentComponent, MainComponent, StudentListComponent, StudentFormComponent],
  imports: [
    RouterModule.forChild(routes),
    
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDatepickerModule,

    FuseSharedModule,
    FuseConfirmDialogModule,
    FuseSidebarModule
  ],
  entryComponents:[StudentComponent, StudentFormComponent]
})
export class StudentModule { }
