import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArriveAtGroceryPage } from './arrive-at-grocery.page';

const routes: Routes = [
  {
    path: '',
    component: ArriveAtGroceryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArriveAtGroceryPageRoutingModule {}
