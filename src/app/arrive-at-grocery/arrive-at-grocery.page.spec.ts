import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArriveAtGroceryPage } from './arrive-at-grocery.page';

describe('ArriveAtGroceryPage', () => {
  let component: ArriveAtGroceryPage;
  let fixture: ComponentFixture<ArriveAtGroceryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArriveAtGroceryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
