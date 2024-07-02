import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FastSlowMclarenGasPage } from './fast-slow-mclaren-gas.page';

describe('FastSlowMclarenGasPage', () => {
  let component: FastSlowMclarenGasPage;
  let fixture: ComponentFixture<FastSlowMclarenGasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FastSlowMclarenGasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
