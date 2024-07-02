import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeadEndPageRoutingModule } from './dead-end-routing.module';

import { DeadEndPage } from './dead-end.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeadEndPageRoutingModule
  ],
  declarations: [DeadEndPage]
})
export class DeadEndPageModule {}
