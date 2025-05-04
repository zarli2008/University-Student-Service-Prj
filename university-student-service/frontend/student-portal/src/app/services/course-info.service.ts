import { Injectable } from '@angular/core';
import { iCourseInfo } from '../model/interface/courseinfo';
import { HttpClient } from '@angular/common/http';
import { COURSE_API_URL } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})

 
export class CourseInfoService {

  constructor(private http: HttpClient) {}
  getCourseInfo() {
    return this.http.get<iCourseInfo[]>(COURSE_API_URL);
    //return this.enrolments 
  }
}
