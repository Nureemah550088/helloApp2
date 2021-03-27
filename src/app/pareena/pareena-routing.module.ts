import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PareenaPage } from './pareena.page';

const routes: Routes = [
  {
    path: '',
    component: PareenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PareenaPageRoutingModule {}
