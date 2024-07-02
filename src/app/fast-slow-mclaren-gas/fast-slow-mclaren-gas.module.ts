import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FastSlowMclarenGasPageRoutingModule } from './fast-slow-mclaren-gas-routing.module';

import { FastSlowMclarenGasPage } from './fast-slow-mclaren-gas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FastSlowMclarenGasPageRoutingModule
  ],
  declarations: [FastSlowMclarenGasPage]
})
export class FastSlowMclarenGasPageModule {}
