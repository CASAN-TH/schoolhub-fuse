import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooldialogComponent } from './schooldialog.component';

describe('SchooldialogComponent', () => {
  let component: SchooldialogComponent;
  let fixture: ComponentFixture<SchooldialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchooldialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchooldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
