import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FastSlowMclarenGroceryPage } from './fast-slow-mclaren-grocery.page';

describe('FastSlowMclarenGroceryPage', () => {
  let component: FastSlowMclarenGroceryPage;
  let fixture: ComponentFixture<FastSlowMclarenGroceryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FastSlowMclarenGroceryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
