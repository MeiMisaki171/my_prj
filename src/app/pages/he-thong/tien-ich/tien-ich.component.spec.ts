import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TienIchComponent } from './tien-ich.component';

describe('TienIchComponent', () => {
  let component: TienIchComponent;
  let fixture: ComponentFixture<TienIchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TienIchComponent]
    });
    fixture = TestBed.createComponent(TienIchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
