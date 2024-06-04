import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManoidungkinhteComponent } from './manoidungkinhte.component';

describe('ManoidungkinhteComponent', () => {
  let component: ManoidungkinhteComponent;
  let fixture: ComponentFixture<ManoidungkinhteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManoidungkinhteComponent]
    });
    fixture = TestBed.createComponent(ManoidungkinhteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
