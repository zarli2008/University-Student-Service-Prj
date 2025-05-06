import { TestBed } from '@angular/core/testing';

import { CourseInfoService } from './course-info.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CourseInfoService', () => {
  let service: CourseInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseInfoService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
