import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlowGroceryMclarenPageRoutingModule } from './slow-grocery-mclaren-routing.module';

import { SlowGroceryMclarenPage } from './slow-grocery-mclaren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlowGroceryMclarenPageRoutingModule
  ],
  declarations: [SlowGroceryMclarenPage]
})
export class SlowGroceryMclarenPageModule {}
