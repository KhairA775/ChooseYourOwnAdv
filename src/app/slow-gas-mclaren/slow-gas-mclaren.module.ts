import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlowGasMclarenPageRoutingModule } from './slow-gas-mclaren-routing.module';

import { SlowGasMclarenPage } from './slow-gas-mclaren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlowGasMclarenPageRoutingModule
  ],
  declarations: [SlowGasMclarenPage]
})
export class SlowGasMclarenPageModule {}
