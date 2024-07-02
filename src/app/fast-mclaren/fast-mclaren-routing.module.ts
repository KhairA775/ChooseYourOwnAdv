import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FastMclarenPage } from './fast-mclaren.page';

const routes: Routes = [
  {
    path: '',
    component: FastMclarenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FastMclarenPageRoutingModule {}
