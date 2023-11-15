import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorlistComponent } from './instructorlist.component';

describe('InstructorlistComponent', () => {
  let component: InstructorlistComponent;
  let fixture: ComponentFixture<InstructorlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorlistComponent]
    });
    fixture = TestBed.createComponent(InstructorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
