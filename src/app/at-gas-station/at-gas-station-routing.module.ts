import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtGasStationPage } from './at-gas-station.page';

const routes: Routes = [
  {
    path: '',
    component: AtGasStationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtGasStationPageRoutingModule {}
