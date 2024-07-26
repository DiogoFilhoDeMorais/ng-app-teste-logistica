import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModulesComponent } from './shared-modules.component';
import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { DeliveriesListComponent } from './delivery/deliveries-list/deliveries-list.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    SharedModulesComponent,
    DeliveriesListComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
  ],
})
export class SharedModulesModule { }
