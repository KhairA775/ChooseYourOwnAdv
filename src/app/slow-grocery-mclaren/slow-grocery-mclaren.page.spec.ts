import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlowGroceryMclarenPage } from './slow-grocery-mclaren.page';

describe('SlowGroceryMclarenPage', () => {
  let component: SlowGroceryMclarenPage;
  let fixture: ComponentFixture<SlowGroceryMclarenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SlowGroceryMclarenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
