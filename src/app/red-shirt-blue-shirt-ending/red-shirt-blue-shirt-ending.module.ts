import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedShirtBlueShirtEndingPageRoutingModule } from './red-shirt-blue-shirt-ending-routing.module';

import { RedShirtBlueShirtEndingPage } from './red-shirt-blue-shirt-ending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedShirtBlueShirtEndingPageRoutingModule
  ],
  declarations: [RedShirtBlueShirtEndingPage]
})
export class RedShirtBlueShirtEndingPageModule {}
