import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicenseRegistrationPageRoutingModule } from './license-registration-routing.module';

import { LicenseRegistrationPage } from './license-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicenseRegistrationPageRoutingModule
  ],
  declarations: [LicenseRegistrationPage]
})
export class LicenseRegistrationPageModule {}
