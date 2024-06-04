import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NganhangComponent } from './nganhang.component';

describe('NganhangComponent', () => {
  let component: NganhangComponent;
  let fixture: ComponentFixture<NganhangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NganhangComponent]
    });
    fixture = TestBed.createComponent(NganhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
