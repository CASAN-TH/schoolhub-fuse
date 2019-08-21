import { Component, OnInit, ViewEncapsulation, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { AuthenService } from '../authen.service';
import { Router } from '@angular/router';
import { SchoolService } from 'app/main/school/school.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    user = {
        username: '',
        password: ''
    };
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private router: Router,
        private auth: AuthenService,
        private sch: SchoolService
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };

        this.auth.isLoggedIn = new EventEmitter();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    /**
     * On login button click
     */
    login(): void {
        this.auth.login(this.user);
        this.auth.isLoggedIn.subscribe((res: any) => {
            if (res.status === 200) {
                this.sch.getbyid(this.auth.user.ref1);
                this.router.navigate(['']);
            } else {
                // error
            }
        }, (err: any) => {
            console.log(err);
        }, () => {
            console.log("complete");
        });
    }


}
