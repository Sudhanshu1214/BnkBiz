import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CoreModule } from '../core/core.module';
// import { ToolbarComponent } from '../core/toolbar/toolbar.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CoreModule
  ]
})
export class ProductModule { }
