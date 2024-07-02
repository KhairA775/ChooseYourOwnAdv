import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KiaSoulPageRoutingModule } from './kia-soul-routing.module';

import { KiaSoulPage } from './kia-soul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KiaSoulPageRoutingModule
  ],
  declarations: [KiaSoulPage]
})
export class KiaSoulPageModule {}
