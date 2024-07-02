import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GasMilkEndingPageRoutingModule } from './gas-milk-ending-routing.module';

import { GasMilkEndingPage } from './gas-milk-ending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GasMilkEndingPageRoutingModule
  ],
  declarations: [GasMilkEndingPage]
})
export class GasMilkEndingPageModule {}
