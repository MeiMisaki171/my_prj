import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachuongComponent } from './machuong.component';

describe('MachuongComponent', () => {
  let component: MachuongComponent;
  let fixture: ComponentFixture<MachuongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachuongComponent]
    });
    fixture = TestBed.createComponent(MachuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
