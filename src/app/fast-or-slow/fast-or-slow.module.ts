import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FastOrSlowPageRoutingModule } from './fast-or-slow-routing.module';

import { FastOrSlowPage } from './fast-or-slow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FastOrSlowPageRoutingModule
  ],
  declarations: [FastOrSlowPage]
})
export class FastOrSlowPageModule {}
