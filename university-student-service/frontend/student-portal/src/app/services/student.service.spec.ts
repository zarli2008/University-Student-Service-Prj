import { TestBed } from '@angular/core/testing';
import { StudentService } from './student.service';
import { Student } from '../model/interface/student.interface';

describe('StudentService', () => {
  let service: StudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a student', () => {
    const student: Student = {
      email: 'test@example.com',
      name: 'Test Student',
      about: 'Some info',
      address: '123 Main St',
      profileImage: null,

      permanentAddress: {
        streetNumber: '5',
        streetName: 'Main',
        suburb: 'Central',
        city: 'Auckland',
        country: 'New Zealand',
        postcode: '1010',
        phone: '1234567'
      },
      studyAddress: {
        streetNumber: '5',
        streetName: 'Main',
        suburb: 'Central',
        city: 'Auckland',
        country: 'New Zealand',
        postcode: '1010',
        phone: '1234567'
      },
      
      contactEmail: '',
      confirmEmail: '',
      emergencyContact: {
        name: '',
        relationship: ''
      },
      tertiaryRecords: []
    };

    service.addStudent(student);
    expect(service.getStudents().length).toBe(1);
    expect(service.getStudents()[0].name).toBe('Test Student');
  });

  it('should clear students', () => {
    service.clearStudents();
    expect(service.getStudents().length).toBe(0);
  });
});
