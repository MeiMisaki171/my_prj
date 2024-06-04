import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeThongComponent } from './he-thong.component';

const routes: Routes = [
    { path: 'dangnhap', loadChildren: () => import('./dang-nhap/dangnhap.module').then(m => m.DangNhapModule) },
    { path: 'dangxuat', loadChildren: () => import('./dang-xuat/dang-xuat.module').then(m => m.DangXuatModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeThongRoutingModule { }
