import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutFrontDoorPage } from './out-front-door.page';

describe('OutFrontDoorPage', () => {
  let component: OutFrontDoorPage;
  let fixture: ComponentFixture<OutFrontDoorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OutFrontDoorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
