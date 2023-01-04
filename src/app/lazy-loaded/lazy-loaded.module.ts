import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadedRoutingModule } from './lazy-loaded-routing.module';
import { Counter2Service } from '../counter2.service';
import { CounterService } from '../counter.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LazyLoadedRoutingModule
  ],
  providers: []
})
export class LazyLoadedModule { }
