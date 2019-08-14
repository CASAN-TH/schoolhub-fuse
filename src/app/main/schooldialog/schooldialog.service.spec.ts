import { TestBed } from '@angular/core/testing';

import { SchooldialogService } from './schooldialog.service';

describe('SchooldialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchooldialogService = TestBed.get(SchooldialogService);
    expect(service).toBeTruthy();
  });
});
