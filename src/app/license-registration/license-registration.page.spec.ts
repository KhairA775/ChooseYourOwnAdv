import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenseRegistrationPage } from './license-registration.page';

describe('LicenseRegistrationPage', () => {
  let component: LicenseRegistrationPage;
  let fixture: ComponentFixture<LicenseRegistrationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
