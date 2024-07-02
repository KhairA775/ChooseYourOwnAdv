import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyLotteryPageRoutingModule } from './buy-lottery-routing.module';

import { BuyLotteryPage } from './buy-lottery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyLotteryPageRoutingModule
  ],
  declarations: [BuyLotteryPage]
})
export class BuyLotteryPageModule {}
