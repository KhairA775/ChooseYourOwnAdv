import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlanketEndingPage } from './blanket-ending.page';

describe('BlanketEndingPage', () => {
  let component: BlanketEndingPage;
  let fixture: ComponentFixture<BlanketEndingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BlanketEndingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
