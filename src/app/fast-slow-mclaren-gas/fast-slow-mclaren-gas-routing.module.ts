import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FastSlowMclarenGasPage } from './fast-slow-mclaren-gas.page';

const routes: Routes = [
  {
    path: '',
    component: FastSlowMclarenGasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FastSlowMclarenGasPageRoutingModule {}
