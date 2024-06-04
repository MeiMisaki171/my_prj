import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenhthuComponent } from './kenhthu.component';

describe('KenhthuComponent', () => {
  let component: KenhthuComponent;
  let fixture: ComponentFixture<KenhthuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KenhthuComponent]
    });
    fixture = TestBed.createComponent(KenhthuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
