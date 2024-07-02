import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtGasStationPage } from './at-gas-station.page';

describe('AtGasStationPage', () => {
  let component: AtGasStationPage;
  let fixture: ComponentFixture<AtGasStationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtGasStationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
