import { Injectable } from '@angular/core';
import { EducationRecord } from '../model/interface/education.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentEducationService {

  private storageKey = 'educationRecords';

  getRecords(): EducationRecord[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  saveRecords(records: EducationRecord[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(records));
  }

  clearRecords() {
    localStorage.removeItem(this.storageKey);
  }

  private records: EducationRecord[] = [];

  getStudentEducationRecords(): EducationRecord[] {
    return this.records;
  }

  addRecord(record: EducationRecord) {
    this.records.push(record);
  }

  removeRecord(index: number) {
    this.records.splice(index, 1);
  }

  
}
