import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetKeysPageRoutingModule } from './get-keys-routing.module';

import { GetKeysPage } from './get-keys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetKeysPageRoutingModule
  ],
  declarations: [GetKeysPage]
})
export class GetKeysPageModule {}
