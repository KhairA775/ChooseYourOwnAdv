import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoSleepPage } from './go-sleep.page';

describe('GoSleepPage', () => {
  let component: GoSleepPage;
  let fixture: ComponentFixture<GoSleepPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GoSleepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
