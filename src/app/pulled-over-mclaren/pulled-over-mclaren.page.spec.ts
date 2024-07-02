import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PulledOverMclarenPage } from './pulled-over-mclaren.page';

describe('PulledOverMclarenPage', () => {
  let component: PulledOverMclarenPage;
  let fixture: ComponentFixture<PulledOverMclarenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PulledOverMclarenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
