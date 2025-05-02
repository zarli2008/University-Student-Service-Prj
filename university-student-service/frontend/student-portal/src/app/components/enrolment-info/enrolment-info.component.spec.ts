import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolmentInfoComponent } from './enrolment-info.component';

describe('EnrolmentInfoComponent', () => {
  let component: EnrolmentInfoComponent;
  let fixture: ComponentFixture<EnrolmentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrolmentInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrolmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
