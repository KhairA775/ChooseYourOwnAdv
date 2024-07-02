import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlowGasMclarenPage } from './slow-gas-mclaren.page';

const routes: Routes = [
  {
    path: '',
    component: SlowGasMclarenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlowGasMclarenPageRoutingModule {}
