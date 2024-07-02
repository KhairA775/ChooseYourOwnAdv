import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutFrontDoorPage } from './out-front-door.page';

const routes: Routes = [
  {
    path: '',
    component: OutFrontDoorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutFrontDoorPageRoutingModule {}
