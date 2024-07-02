import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DontGiveLotteryPage } from './dont-give-lottery.page';

const routes: Routes = [
  {
    path: '',
    component: DontGiveLotteryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DontGiveLotteryPageRoutingModule {}
