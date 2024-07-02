import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoadRageEndingPage } from './road-rage-ending.page';

const routes: Routes = [
  {
    path: '',
    component: RoadRageEndingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoadRageEndingPageRoutingModule {}
