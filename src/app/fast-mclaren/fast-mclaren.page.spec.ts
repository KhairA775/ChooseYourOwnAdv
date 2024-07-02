import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FastMclarenPage } from './fast-mclaren.page';

describe('FastMclarenPage', () => {
  let component: FastMclarenPage;
  let fixture: ComponentFixture<FastMclarenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FastMclarenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
