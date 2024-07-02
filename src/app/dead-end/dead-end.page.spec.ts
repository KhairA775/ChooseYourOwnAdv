import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeadEndPage } from './dead-end.page';

describe('DeadEndPage', () => {
  let component: DeadEndPage;
  let fixture: ComponentFixture<DeadEndPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadEndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
