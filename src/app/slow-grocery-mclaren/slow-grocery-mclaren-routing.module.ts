import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlowGroceryMclarenPage } from './slow-grocery-mclaren.page';

const routes: Routes = [
  {
    path: '',
    component: SlowGroceryMclarenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlowGroceryMclarenPageRoutingModule {}
