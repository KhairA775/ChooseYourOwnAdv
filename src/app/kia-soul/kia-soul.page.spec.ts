import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KiaSoulPage } from './kia-soul.page';

describe('KiaSoulPage', () => {
  let component: KiaSoulPage;
  let fixture: ComponentFixture<KiaSoulPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KiaSoulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
