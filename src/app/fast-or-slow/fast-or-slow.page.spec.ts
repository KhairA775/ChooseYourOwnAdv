import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FastOrSlowPage } from './fast-or-slow.page';

describe('FastOrSlowPage', () => {
  let component: FastOrSlowPage;
  let fixture: ComponentFixture<FastOrSlowPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FastOrSlowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
