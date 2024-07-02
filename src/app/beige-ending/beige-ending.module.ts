import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeigeEndingPageRoutingModule } from './beige-ending-routing.module';

import { BeigeEndingPage } from './beige-ending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeigeEndingPageRoutingModule
  ],
  declarations: [BeigeEndingPage]
})
export class BeigeEndingPageModule {}
