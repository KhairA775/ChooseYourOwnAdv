import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyLotteryPage } from './buy-lottery.page';

const routes: Routes = [
  {
    path: '',
    component: BuyLotteryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyLotteryPageRoutingModule {}
