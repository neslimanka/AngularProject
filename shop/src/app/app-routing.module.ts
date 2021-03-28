import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
   {path:'products',component:ProductComponent}, //Eğer birisi bana path olarak yukarıya "products" yazarsa ben compenent olarak : ProductComponent in gelmsini istiyorum. 
   {path:'', redirectTo:'products', pathMatch:'full'},
   { path:'products/category/:categoryId', component:ProductComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
