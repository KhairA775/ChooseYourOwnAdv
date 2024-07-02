import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeigeEndingPage } from './beige-ending.page';

describe('BeigeEndingPage', () => {
  let component: BeigeEndingPage;
  let fixture: ComponentFixture<BeigeEndingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BeigeEndingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
