import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NganhangketxuatComponent } from './nganhangketxuat.component';

describe('NganhangketxuatComponent', () => {
  let component: NganhangketxuatComponent;
  let fixture: ComponentFixture<NganhangketxuatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NganhangketxuatComponent]
    });
    fixture = TestBed.createComponent(NganhangketxuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
