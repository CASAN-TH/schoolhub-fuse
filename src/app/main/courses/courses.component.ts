import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CourseService } from './course.service';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { Course } from './course.model';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations : fuseAnimations
})
export class CoursesComponent implements OnInit {

  constructor(
    private _courseService :CourseService,
    private _router :Router
    ) { }

  ngOnInit() {
    
  }

  newCourse(){
    const newCourse = new Course({});
        this._courseService.createNewCourse(newCourse).then(() => {
            this._router.navigate(['/courses/courselist/' + newCourse.id]);
        });
  }
}
