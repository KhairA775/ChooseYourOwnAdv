import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KiaSoulPage } from './kia-soul.page';

const routes: Routes = [
  {
    path: '',
    component: KiaSoulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KiaSoulPageRoutingModule {}
