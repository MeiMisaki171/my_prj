import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaiquanComponent } from './haiquan.component';

describe('HaiquanComponent', () => {
  let component: HaiquanComponent;
  let fixture: ComponentFixture<HaiquanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaiquanComponent]
    });
    fixture = TestBed.createComponent(HaiquanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
