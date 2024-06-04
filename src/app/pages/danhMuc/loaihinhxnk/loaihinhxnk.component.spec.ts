import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaihinhxnkComponent } from './loaihinhxnk.component';

describe('LoaihinhxnkComponent', () => {
  let component: LoaihinhxnkComponent;
  let fixture: ComponentFixture<LoaihinhxnkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaihinhxnkComponent]
    });
    fixture = TestBed.createComponent(LoaihinhxnkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
