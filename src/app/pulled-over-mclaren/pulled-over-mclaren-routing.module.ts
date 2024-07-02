import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PulledOverMclarenPage } from './pulled-over-mclaren.page';

const routes: Routes = [
  {
    path: '',
    component: PulledOverMclarenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PulledOverMclarenPageRoutingModule {}
