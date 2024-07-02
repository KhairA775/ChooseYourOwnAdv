import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlanketEndingPage } from './blanket-ending.page';

const routes: Routes = [
  {
    path: '',
    component: BlanketEndingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlanketEndingPageRoutingModule {}
