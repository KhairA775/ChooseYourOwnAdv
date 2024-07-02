import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButGasMilkPage } from './but-gas-milk.page';

describe('ButGasMilkPage', () => {
  let component: ButGasMilkPage;
  let fixture: ComponentFixture<ButGasMilkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ButGasMilkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
