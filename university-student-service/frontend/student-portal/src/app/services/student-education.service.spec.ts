import { TestBed } from '@angular/core/testing';
import { StudentEducationService } from './student-education.service';
import { EducationRecord } from '../model/interface/education.interface';

describe('EducationService', () => {
  let service: StudentEducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentEducationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a record', () => {
    const record: EducationRecord = {
      yearFrom: '2020',
      yearTo: '2022',
      institution: 'AUT',
      qualification: 'Diploma in IT',
      location: 'New Zealand',
      completed: true,
      awaiting: false
    };

    service.addRecord(record);
    expect(service.getStudentEducationRecords().length).toBe(1);
    expect(service.getStudentEducationRecords()[0].institution).toBe('AUT');
  });

  it('should remove a record', () => {
    const record: EducationRecord = {
      yearFrom: '2020',
      yearTo: '2022',
      institution: 'AUT',
      qualification: 'Diploma in IT',
      location: 'New Zealand',
      completed: true,
      awaiting: false
    };
    
    service.addRecord(record);
    expect(service.getStudentEducationRecords().length).toBe(1);

    service.removeRecord(0);
    expect(service.getStudentEducationRecords().length).toBe(0);
  });

  it('should clear all records', () => {
    service.clearRecords();
    expect(service.getStudentEducationRecords().length).toBe(0);
  });
});
