import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NureemahPageRoutingModule } from './nureemah-routing.module';

import { NureemahPage } from './nureemah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NureemahPageRoutingModule
  ],
  declarations: [NureemahPage]
})
export class NureemahPageModule {}
