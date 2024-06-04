import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManhthComponent } from './manhth.component';

describe('ManhthComponent', () => {
  let component: ManhthComponent;
  let fixture: ComponentFixture<ManhthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManhthComponent]
    });
    fixture = TestBed.createComponent(ManhthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
