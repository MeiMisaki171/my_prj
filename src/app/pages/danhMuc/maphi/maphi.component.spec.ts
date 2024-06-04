import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaphiComponent } from './maphi.component';

describe('MaphiComponent', () => {
  let component: MaphiComponent;
  let fixture: ComponentFixture<MaphiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaphiComponent]
    });
    fixture = TestBed.createComponent(MaphiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
