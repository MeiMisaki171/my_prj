import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaithueComponent } from './loaithue.component';

describe('LoaithueComponent', () => {
  let component: LoaithueComponent;
  let fixture: ComponentFixture<LoaithueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaithueComponent]
    });
    fixture = TestBed.createComponent(LoaithueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
