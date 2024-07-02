import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagentaEndingPage } from './magenta-ending.page';

const routes: Routes = [
  {
    path: '',
    component: MagentaEndingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagentaEndingPageRoutingModule {}
