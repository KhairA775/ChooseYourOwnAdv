import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButGasMilkPage } from './but-gas-milk.page';

const routes: Routes = [
  {
    path: '',
    component: ButGasMilkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButGasMilkPageRoutingModule {}
