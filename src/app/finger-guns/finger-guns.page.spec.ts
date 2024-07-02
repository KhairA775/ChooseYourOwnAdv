import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FingerGunsPage } from './finger-guns.page';

describe('FingerGunsPage', () => {
  let component: FingerGunsPage;
  let fixture: ComponentFixture<FingerGunsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FingerGunsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
