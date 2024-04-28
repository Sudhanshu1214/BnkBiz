import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanProductRoutingModule } from './loan-product-routing.module';
import { LoanProductComponent } from './loan-product.component';
import { CrateLoanProductComponent } from './crate-loan-product/crate-loan-product.component';


@NgModule({
  declarations: [
    LoanProductComponent,
    CrateLoanProductComponent
  ],
  imports: [
    CommonModule,
    LoanProductRoutingModule
  ]
})
export class LoanProductModule { }
