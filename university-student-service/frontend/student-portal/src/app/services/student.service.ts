import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../model/interface/student.interface'; 

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentData = new BehaviorSubject<Student>({
    name: 'Khin',
    email: 'Ms.',
    about: 'Le Le',
    address: 'Female',
    fullname: 'Khin Le Le',
    passport: 'MA123456',
    country: 'Myanmar',
    dateofbirth: '01/01/2000',
    profileImage: null,

    permanentAddress: {
      streetNumber: '15',
      streetName: 'City Road',
      suburb: 'Auckland Central',
      city: 'Auckland',
      country: 'NEW ZEALAND',
      postcode: '1010',
      phone: '02902354741'
    },
    studyAddress: {
      streetNumber: '15',
      streetName: 'City Road',
      suburb: 'Auckland Central',
      city: 'Auckland',
      country: 'NEW ZEALAND',
      postcode: '1010',
      phone: '02902354741'
    },
    contactEmail: 'kll@gmail.com',
    confirmEmail: 'kll@gmail.com',
    emergencyContact: {
      name: 'Miss Khin',
      relationship: 'Sister'
    },
    tertiaryRecords: []

  });

  student$ = this.studentData.asObservable();

  updateStudent(newData: Partial<Student>) {
    const current = this.studentData.value;
    this.studentData.next({ ...current, ...newData });
  }

  private students: Student[] = [];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  clearStudents() {
    this.students = [];
  }

  /*
  getStudentById(id: number): Student | undefined {
    
  }*/
}