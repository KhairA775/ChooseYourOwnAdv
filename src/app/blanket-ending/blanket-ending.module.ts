import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlanketEndingPageRoutingModule } from './blanket-ending-routing.module';

import { BlanketEndingPage } from './blanket-ending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlanketEndingPageRoutingModule
  ],
  declarations: [BlanketEndingPage]
})
export class BlanketEndingPageModule {}
