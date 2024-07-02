import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GasStationPageRoutingModule } from './gas-station-routing.module';

import { GasStationPage } from './gas-station.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GasStationPageRoutingModule
  ],
  declarations: [GasStationPage]
})
export class GasStationPageModule {}
