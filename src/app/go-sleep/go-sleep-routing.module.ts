import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoSleepPage } from './go-sleep.page';

const routes: Routes = [
  {
    path: '',
    component: GoSleepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoSleepPageRoutingModule {}
