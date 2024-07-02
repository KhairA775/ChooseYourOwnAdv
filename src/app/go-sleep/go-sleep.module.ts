import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoSleepPageRoutingModule } from './go-sleep-routing.module';

import { GoSleepPage } from './go-sleep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoSleepPageRoutingModule
  ],
  declarations: [GoSleepPage]
})
export class GoSleepPageModule {}
