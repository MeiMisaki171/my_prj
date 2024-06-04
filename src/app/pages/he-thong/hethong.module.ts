import { NgModule } from '@angular/core';

import { HeThongRoutingModule } from './hethong-routing.module';
import { HeThongComponent } from './he-thong.component';


@NgModule({
  imports: [HeThongRoutingModule],
  declarations: [HeThongComponent],
  exports: [HeThongComponent]
})
export class HeThongModule { }
