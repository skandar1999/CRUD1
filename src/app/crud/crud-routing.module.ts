import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path : '' , redirectTo : 'product-list' , pathMatch:'full'} ,
{path : 'product-list' , component:ProductListComponent},
{path : 'create-product' , component:ProductFormComponent},
{path : 'update-product/:productId' , component:ProductFormComponent},
{path : 'view-product-details/:producyId' , component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRUDRoutingModule { }
