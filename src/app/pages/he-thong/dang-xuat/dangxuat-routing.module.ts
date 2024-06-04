import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangXuatComponent } from './dang-xuat.component';

const routes: Routes = [
  { path: '', component: DangXuatComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DangxuatRoutingModule { }
