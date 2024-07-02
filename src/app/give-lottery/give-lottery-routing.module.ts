import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiveLotteryPage } from './give-lottery.page';

const routes: Routes = [
  {
    path: '',
    component: GiveLotteryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiveLotteryPageRoutingModule {}
