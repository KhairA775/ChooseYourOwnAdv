import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlowGasMclarenPage } from './slow-gas-mclaren.page';

describe('SlowGasMclarenPage', () => {
  let component: SlowGasMclarenPage;
  let fixture: ComponentFixture<SlowGasMclarenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SlowGasMclarenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
