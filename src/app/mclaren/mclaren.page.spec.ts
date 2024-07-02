import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MclarenPage } from './mclaren.page';

describe('MclarenPage', () => {
  let component: MclarenPage;
  let fixture: ComponentFixture<MclarenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MclarenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
