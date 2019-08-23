import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatButtonModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatListModule, MatMenuModule, MatProgressBarModule, MatRippleModule, MatSidenavModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule, FuseMaterialColorPickerModule } from '@fuse/components';
import { CourselistComponent } from './courselist/courselist.component';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { AddcourselistComponent } from './courselist/addcourselist/addcourselist.component';
import { SettingsComponent } from './courselist/sidenavs/settings/settings.component';
import { CourseColorSelectorComponent } from './courselist/sidenavs/settings/course-color-selector/course-color-selector.component';
import { EditcoursenameComponent } from './courselist/editcoursename/editcoursename.component';
import { CourseService } from './course.service';


const routes = [
  {
    path: '',
    component: CoursesComponent,
    canActivate: [AuthenGuardService]
  },
  {
    path: 'courselist/:courselistId',
    component: CourselistComponent,
    resolve  : {
      courses: CourseService
  }
  },
];
@NgModule({
  declarations: [CoursesComponent, 
    CourselistComponent, AddcourselistComponent, SettingsComponent, CourseColorSelectorComponent, EditcoursenameComponent],
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,

    NgxDnDModule,

    FuseSharedModule,
    FuseConfirmDialogModule,
    FuseMaterialColorPickerModule
  ]
})
export class CoursesModule { }
