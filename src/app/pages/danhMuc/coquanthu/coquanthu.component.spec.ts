import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoquanthuComponent } from './coquanthu.component';

describe('CoquanthuComponent', () => {
  let component: CoquanthuComponent;
  let fixture: ComponentFixture<CoquanthuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoquanthuComponent]
    });
    fixture = TestBed.createComponent(CoquanthuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
