import { Injectable } from '@angular/core';
import { Enrolment } from '../model/interface/enrolment';

@Injectable({
  providedIn: 'root',
})
export class EnrolmentService {
  private enrolments: Enrolment[] = [
    {
      period: '2025-S1',
      classCode: 'INFS803/W150',
      courseName: 'Cloud Computing',
      status: 'Paid',
      starts: '03-Mar-2025',
      location: 'City',
      level: 8,
      stream: 'A',
      efts: 0.125,
    },
    {
      period: '2025-S1',
      classCode: 'COMP809/W101',
      courseName: 'Data Mining and Machine Learning',
      status: 'Paid',
      starts: '03-Mar-2025',
      location: 'City',
      level: 8,
      stream: 'A',
      efts: 0.125,
    },
    {
      period: '2025-S1',
      classCode: 'COMP838/W150',
      courseName: 'Deep Learning',
      status: 'Paid',
      starts: '03-Mar-2025',
      location: 'City',
      level: 8,
      stream: 'A',
      efts: 0.125,
    },
    {
      period: '2025-S1',
      classCode: 'COMP828/W101',
      courseName: 'Statistical Programming for Data Science',
      status: 'Paid',
      starts: '03-Mar-2025',
      location: 'City',
      level: 8,
      stream: 'A',
      efts: 0.125,
    },
  ];

  getEnrolments(): Enrolment[] {
    return this.enrolments;
  }

  constructor() {}
}
