import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GasMilkEndingPage } from './gas-milk-ending.page';

describe('GasMilkEndingPage', () => {
  let component: GasMilkEndingPage;
  let fixture: ComponentFixture<GasMilkEndingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GasMilkEndingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
