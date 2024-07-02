import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyLotteryPage } from './buy-lottery.page';

describe('BuyLotteryPage', () => {
  let component: BuyLotteryPage;
  let fixture: ComponentFixture<BuyLotteryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyLotteryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
