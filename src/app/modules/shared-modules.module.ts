import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModulesComponent } from './shared-modules.component';
import { SharedModulesRoutingModule } from './shared-modules-routing.module';

@NgModule({
  declarations: [ SharedModulesComponent ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule,
  ],
})
export class SharedModulesModule { }
