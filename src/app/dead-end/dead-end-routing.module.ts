import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeadEndPage } from './dead-end.page';

const routes: Routes = [
  {
    path: '',
    component: DeadEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeadEndPageRoutingModule {}
