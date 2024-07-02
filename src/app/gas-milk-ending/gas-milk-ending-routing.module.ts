import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GasMilkEndingPage } from './gas-milk-ending.page';

const routes: Routes = [
  {
    path: '',
    component: GasMilkEndingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GasMilkEndingPageRoutingModule {}
