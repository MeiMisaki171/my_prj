import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuanTriComponent } from './quan-tri.component';

const routes: Routes = [
  { path: '', component: QuanTriComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanTriRoutingModule { }
