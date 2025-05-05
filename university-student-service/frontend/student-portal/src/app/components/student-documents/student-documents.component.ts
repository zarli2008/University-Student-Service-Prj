import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface StudentDocument {
  category: string;
  uploaded: boolean;
  dateUploaded: string;
  uploadedBy: string;
  type: string;
  fileName: string;
  certified: boolean;
  certifiedBy: string | null;
  certifiedDate: string | null;
  admissions: boolean;
  selected?: boolean;
}

@Component({
  selector: 'app-student-documents',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student-documents.component.html',
  styleUrls: ['./student-documents.component.scss']
})
export class StudentDocumentsComponent implements OnInit {
  documents: StudentDocument[] = [];

  ngOnInit(): void {
    this.documents = [
      {
        category: 'PrivateScannedDocs',
        uploaded: true,
        dateUploaded: '01-Jan-2025',
        uploadedBy: 'Wutt Yee',
        type: 'Valid Visa',
        fileName: 'Immigration New Zealand - 81617110.pdf',
        certified: false,
        certifiedBy: null,
        certifiedDate: null,
        admissions: false
      },
      {
        category: 'Scanned Documents',
        uploaded: true,
        dateUploaded: '01-Mar-2025',
        uploadedBy: 'Wutt Yee',
        type: 'CV',
        fileName: 'Curriculum Vitae.pdf',
        certified: false,
        certifiedBy: null,
        certifiedDate: null,
        admissions: true
      },
      // Add more entries...
    ];
  }

  downloadSelected(): void {
    const selectedDocs = this.documents.filter(d => d.selected);
    console.log('Downloading:', selectedDocs);
    // Implement actual download logic
  }

  deleteSelected(): void {
    this.documents = this.documents.filter(d => !d.selected);
  }
}
