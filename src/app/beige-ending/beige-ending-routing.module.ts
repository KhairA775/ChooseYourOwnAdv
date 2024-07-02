import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeigeEndingPage } from './beige-ending.page';

const routes: Routes = [
  {
    path: '',
    component: BeigeEndingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeigeEndingPageRoutingModule {}
