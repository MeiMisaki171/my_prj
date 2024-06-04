import { NgModule } from '@angular/core';

import { DangnhapRoutingModule } from './dangnhap-routing.module';
import { DangNhapComponent } from './dang-nhap.component';


@NgModule({
  imports: [DangnhapRoutingModule],
  declarations: [DangNhapComponent],
  exports: [DangNhapComponent]
})
export class DangNhapModule { }
