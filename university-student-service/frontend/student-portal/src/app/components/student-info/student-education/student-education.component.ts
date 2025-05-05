import { Component, OnInit } from '@angular/core';
import { EducationRecord } from '../../../model/interface/education.interface';
import { StudentEducationService } from '../../../services/student-education.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-education',
  templateUrl: './student-education.component.html',
  imports: [CommonModule, FormsModule],
})
export class StudentEducationComponent implements OnInit {

  newRecord: EducationRecord = {
    yearFrom: '',
    yearTo: '',
    institution: '',
    qualification: '',
    location: 'NEW ZEALAND',
    completed: false,
    awaiting: false
  };

  records: EducationRecord[] = [];

  constructor(private educationService: StudentEducationService) {}

  ngOnInit() {
    this.records = this.educationService.getRecords();
  }

  addRecord() {
    if (this.newRecord.yearFrom && this.newRecord.yearTo && this.newRecord.institution) {
      this.records.push({ ...this.newRecord });
      this.educationService.saveRecords(this.records);
      this.clearForm();
    }
  }

  removeRecord(index: number) {
    this.records.splice(index, 1);
    this.educationService.saveRecords(this.records);
  }

  private clearForm() {
    this.newRecord = {
      yearFrom: '',
      yearTo: '',
      institution: '',
      qualification: '',
      location: 'NEW ZEALAND',
      completed: false,
      awaiting: false
    };
  }

  saveAllRecords() {
    alert('Changes saved successfully! (For demo purpose)');
    // Save the whole records array to your API or database
  }
  
}
