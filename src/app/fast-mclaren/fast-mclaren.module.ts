import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FastMclarenPageRoutingModule } from './fast-mclaren-routing.module';

import { FastMclarenPage } from './fast-mclaren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FastMclarenPageRoutingModule
  ],
  declarations: [FastMclarenPage]
})
export class FastMclarenPageModule {}
