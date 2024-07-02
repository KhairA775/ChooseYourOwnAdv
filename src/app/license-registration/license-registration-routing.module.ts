import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenseRegistrationPage } from './license-registration.page';

const routes: Routes = [
  {
    path: '',
    component: LicenseRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenseRegistrationPageRoutingModule {}
