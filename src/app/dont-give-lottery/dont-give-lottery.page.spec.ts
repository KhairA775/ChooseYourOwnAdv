import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DontGiveLotteryPage } from './dont-give-lottery.page';

describe('DontGiveLotteryPage', () => {
  let component: DontGiveLotteryPage;
  let fixture: ComponentFixture<DontGiveLotteryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DontGiveLotteryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
