import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FastOrSlowPage } from './fast-or-slow.page';

const routes: Routes = [
  {
    path: '',
    component: FastOrSlowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FastOrSlowPageRoutingModule {}
