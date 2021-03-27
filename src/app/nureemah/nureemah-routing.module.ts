import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NureemahPage } from './nureemah.page';

const routes: Routes = [
  {
    path: '',
    component: NureemahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NureemahPageRoutingModule {}
