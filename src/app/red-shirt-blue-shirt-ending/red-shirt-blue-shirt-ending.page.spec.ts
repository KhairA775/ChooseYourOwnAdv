import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedShirtBlueShirtEndingPage } from './red-shirt-blue-shirt-ending.page';

describe('RedShirtBlueShirtEndingPage', () => {
  let component: RedShirtBlueShirtEndingPage;
  let fixture: ComponentFixture<RedShirtBlueShirtEndingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RedShirtBlueShirtEndingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
