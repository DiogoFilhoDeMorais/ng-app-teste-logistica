import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveriesListComponent } from './delivery/deliveries-list/deliveries-list.component';

const sharedModulesRouting: Routes = [
  {
    path: 'list',
    component: DeliveriesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(sharedModulesRouting)],
  exports: [RouterModule],
})
export class SharedModulesRoutingModule {}
