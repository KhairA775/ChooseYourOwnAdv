import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetKeysPage } from './get-keys.page';

describe('GetKeysPage', () => {
  let component: GetKeysPage;
  let fixture: ComponentFixture<GetKeysPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GetKeysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
