import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PulledOverMclarenPageRoutingModule } from './pulled-over-mclaren-routing.module';

import { PulledOverMclarenPage } from './pulled-over-mclaren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PulledOverMclarenPageRoutingModule
  ],
  declarations: [PulledOverMclarenPage]
})
export class PulledOverMclarenPageModule {}
