import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GiveLotteryPage } from './give-lottery.page';

describe('GiveLotteryPage', () => {
  let component: GiveLotteryPage;
  let fixture: ComponentFixture<GiveLotteryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveLotteryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
