import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DontGiveLotteryPageRoutingModule } from './dont-give-lottery-routing.module';

import { DontGiveLotteryPage } from './dont-give-lottery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DontGiveLotteryPageRoutingModule
  ],
  declarations: [DontGiveLotteryPage]
})
export class DontGiveLotteryPageModule {}
