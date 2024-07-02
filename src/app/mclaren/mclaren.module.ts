import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MclarenPageRoutingModule } from './mclaren-routing.module';

import { MclarenPage } from './mclaren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MclarenPageRoutingModule
  ],
  declarations: [MclarenPage]
})
export class MclarenPageModule {}
