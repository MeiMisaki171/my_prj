import { NgModule } from '@angular/core';

import { DangxuatRoutingModule } from './dangxuat-routing.module';
import { DangXuatComponent } from './dang-xuat.component';


@NgModule({
  imports: [DangxuatRoutingModule],
  declarations: [DangXuatComponent],
  exports: [DangXuatComponent]
})
export class DangXuatModule { }
