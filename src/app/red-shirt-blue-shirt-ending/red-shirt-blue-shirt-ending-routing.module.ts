import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedShirtBlueShirtEndingPage } from './red-shirt-blue-shirt-ending.page';

const routes: Routes = [
  {
    path: '',
    component: RedShirtBlueShirtEndingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedShirtBlueShirtEndingPageRoutingModule {}
