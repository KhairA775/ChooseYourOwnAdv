import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutFrontDoorPageRoutingModule } from './out-front-door-routing.module';

import { OutFrontDoorPage } from './out-front-door.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutFrontDoorPageRoutingModule
  ],
  declarations: [OutFrontDoorPage]
})
export class OutFrontDoorPageModule {}
