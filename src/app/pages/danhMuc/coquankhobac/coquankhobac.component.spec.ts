import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoquankhobacComponent } from './coquankhobac.component';

describe('CoquankhobacComponent', () => {
  let component: CoquankhobacComponent;
  let fixture: ComponentFixture<CoquankhobacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoquankhobacComponent]
    });
    fixture = TestBed.createComponent(CoquankhobacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
