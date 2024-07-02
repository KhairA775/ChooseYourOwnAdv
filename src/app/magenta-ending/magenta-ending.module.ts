import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagentaEndingPageRoutingModule } from './magenta-ending-routing.module';

import { MagentaEndingPage } from './magenta-ending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagentaEndingPageRoutingModule
  ],
  declarations: [MagentaEndingPage]
})
export class MagentaEndingPageModule {}
