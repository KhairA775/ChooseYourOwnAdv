import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButGasMilkPageRoutingModule } from './but-gas-milk-routing.module';

import { ButGasMilkPage } from './but-gas-milk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButGasMilkPageRoutingModule
  ],
  declarations: [ButGasMilkPage]
})
export class ButGasMilkPageModule {}
