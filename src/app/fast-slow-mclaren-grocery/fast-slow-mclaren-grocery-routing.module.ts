import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FastSlowMclarenGroceryPage } from './fast-slow-mclaren-grocery.page';

const routes: Routes = [
  {
    path: '',
    component: FastSlowMclarenGroceryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FastSlowMclarenGroceryPageRoutingModule {}
