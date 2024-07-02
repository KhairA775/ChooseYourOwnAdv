import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoadRageEndingPage } from './road-rage-ending.page';

describe('RoadRageEndingPage', () => {
  let component: RoadRageEndingPage;
  let fixture: ComponentFixture<RoadRageEndingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadRageEndingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
