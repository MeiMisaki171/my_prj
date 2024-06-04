import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabanhanhchinhComponent } from './diabanhanhchinh.component';

describe('DiabanhanhchinhComponent', () => {
  let component: DiabanhanhchinhComponent;
  let fixture: ComponentFixture<DiabanhanhchinhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiabanhanhchinhComponent]
    });
    fixture = TestBed.createComponent(DiabanhanhchinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
