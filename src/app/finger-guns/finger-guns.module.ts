import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FingerGunsPageRoutingModule } from './finger-guns-routing.module';

import { FingerGunsPage } from './finger-guns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FingerGunsPageRoutingModule
  ],
  declarations: [FingerGunsPage]
})
export class FingerGunsPageModule {}
