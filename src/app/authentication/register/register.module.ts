import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { RegisterComponent } from 'app/authentication/register/register.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SchoolComponent } from 'app/main/school/school.component';

const routes = [
    {
        path     : 'register',
        component: RegisterComponent
    }
];

@NgModule({
    declarations: [
        RegisterComponent,
        SchoolComponent
    ],
    imports     : [
        MatDialogModule,
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,
        

        FuseSharedModule
    ],
    entryComponents:[SchoolComponent]
})
export class RegisterModule
{
}
