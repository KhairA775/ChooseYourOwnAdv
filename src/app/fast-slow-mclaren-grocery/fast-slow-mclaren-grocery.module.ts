import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FastSlowMclarenGroceryPageRoutingModule } from './fast-slow-mclaren-grocery-routing.module';

import { FastSlowMclarenGroceryPage } from './fast-slow-mclaren-grocery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FastSlowMclarenGroceryPageRoutingModule
  ],
  declarations: [FastSlowMclarenGroceryPage]
})
export class FastSlowMclarenGroceryPageModule {}
