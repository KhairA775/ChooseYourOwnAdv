import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoadRageEndingPageRoutingModule } from './road-rage-ending-routing.module';

import { RoadRageEndingPage } from './road-rage-ending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoadRageEndingPageRoutingModule
  ],
  declarations: [RoadRageEndingPage]
})
export class RoadRageEndingPageModule {}
