import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetKeysPage } from './get-keys.page';

const routes: Routes = [
  {
    path: '',
    component: GetKeysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetKeysPageRoutingModule {}
