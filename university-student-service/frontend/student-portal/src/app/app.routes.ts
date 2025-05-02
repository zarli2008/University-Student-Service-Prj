import { Routes } from '@angular/router';
import { CourseComponent } from './course/course.component'; // must be standalone too
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', redirectTo: '/course', pathMatch: 'full' },
    { path: 'course', component: CourseComponent }
];

