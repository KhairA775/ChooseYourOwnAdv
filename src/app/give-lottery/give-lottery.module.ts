import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiveLotteryPageRoutingModule } from './give-lottery-routing.module';

import { GiveLotteryPage } from './give-lottery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiveLotteryPageRoutingModule
  ],
  declarations: [GiveLotteryPage]
})
export class GiveLotteryPageModule {}
