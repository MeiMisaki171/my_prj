import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangXuatComponent } from './dang-xuat.component';

describe('DangXuatComponent', () => {
  let component: DangXuatComponent;
  let fixture: ComponentFixture<DangXuatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DangXuatComponent]
    });
    fixture = TestBed.createComponent(DangXuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
