import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThamSoComponent } from './tham-so.component';

describe('ThamSoComponent', () => {
  let component: ThamSoComponent;
  let fixture: ComponentFixture<ThamSoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThamSoComponent]
    });
    fixture = TestBed.createComponent(ThamSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
