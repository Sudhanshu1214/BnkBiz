import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [

  {
    path:'Loan',
    component:ProductComponent
  }
  // Route.withShell([{
  //         path:'product',
  //         children:[
  //      {
  //         path:' ',
  //         component:ProductComponent
  //       }

  //         ]
  // }])

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
