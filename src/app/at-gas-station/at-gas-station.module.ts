import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtGasStationPageRoutingModule } from './at-gas-station-routing.module';

import { AtGasStationPage } from './at-gas-station.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtGasStationPageRoutingModule
  ],
  declarations: [AtGasStationPage]
})
export class AtGasStationPageModule {}
