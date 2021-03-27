import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PareenaPageRoutingModule } from './pareena-routing.module';

import { PareenaPage } from './pareena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PareenaPageRoutingModule
  ],
  declarations: [PareenaPage]
})
export class PareenaPageModule {}
