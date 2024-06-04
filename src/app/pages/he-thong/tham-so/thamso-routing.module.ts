import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThamSoComponent } from './tham-so.component';

const routes: Routes = [
  { path: '', component: ThamSoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThamSoRoutingModule { }
