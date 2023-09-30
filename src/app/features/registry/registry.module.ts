import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistryRoutingModule } from './registry-routing.module';
import { ClientsComponent } from './clients/clients.component';


@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    RegistryRoutingModule
  ]
})
export class RegistryModule { }
