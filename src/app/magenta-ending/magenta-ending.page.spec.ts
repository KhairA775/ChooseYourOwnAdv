import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MagentaEndingPage } from './magenta-ending.page';

describe('MagentaEndingPage', () => {
  let component: MagentaEndingPage;
  let fixture: ComponentFixture<MagentaEndingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MagentaEndingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
