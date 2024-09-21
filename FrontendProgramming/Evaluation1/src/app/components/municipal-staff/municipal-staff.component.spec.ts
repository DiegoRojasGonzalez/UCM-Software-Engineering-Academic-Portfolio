import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalStaffComponent } from './municipal-staff.component';

describe('MunicipalStaffComponent', () => {
  let component: MunicipalStaffComponent;
  let fixture: ComponentFixture<MunicipalStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MunicipalStaffComponent]
    });
    fixture = TestBed.createComponent(MunicipalStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
