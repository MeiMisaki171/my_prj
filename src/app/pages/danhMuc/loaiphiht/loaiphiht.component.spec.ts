import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaiphihtComponent } from './loaiphiht.component';

describe('LoaiphihtComponent', () => {
  let component: LoaiphihtComponent;
  let fixture: ComponentFixture<LoaiphihtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaiphihtComponent]
    });
    fixture = TestBed.createComponent(LoaiphihtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
