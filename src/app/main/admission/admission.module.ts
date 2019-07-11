import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { AdmissionListComponent } from './admission-list/admission-list.component';
import { AdmissionDetailComponent } from './admission-detail/admission-detail.component';

const routes = [
  {
    path     : '',
    component: AdmissionListComponent
  }
];

@NgModule({
  declarations: [AdmissionListComponent, AdmissionDetailComponent],
  imports: [
    RouterModule.forChild(routes),

    TranslateModule,

    FuseSharedModule
  ],
  exports: [AdmissionListComponent, AdmissionDetailComponent]
})
export class AdmissionModule { }
