import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TienIchComponent } from './tien-ich.component';

const routes: Routes = [
  { path: '', component: TienIchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TienIchRoutingModule { }
