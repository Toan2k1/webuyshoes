import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {CartComponent} from "./cart/cart.component";
import {ProductdetailComponent} from "./productdetail/productdetail.component";
import {SignInComponent} from "../login/sign-in/sign-in.component";
import {ProductComponent} from "./product/product.component";
import { AboutComponent } from './about/about.component';
import {AuthGuard} from "../core/auth.guard";
import {OderComponent} from "./oder/oder.component";
import {OrderDetailComponent} from "./order-detail/order-detail.component";
import { ViewCatalogComponent } from './view-catalog/view-catalog.component';


const routes: Routes = [
  {path: 'home', component:HomepageComponent},
  {path: 'cart', component:CartComponent,canActivate:[AuthGuard]},
  {path: 'login', component:SignInComponent},
  {path: 'productdetail/:id', component:ProductdetailComponent,canActivate:[AuthGuard]},
  {path: 'product/:id', component:ProductComponent},
  {path: 'product', component:ProductComponent},
  {path: 'about', component:AboutComponent},
  {path: 'order', component:OderComponent},
  {path: 'orderdetails', component:OrderDetailComponent},
  {path: 'viewCatalog/:id', component:ViewCatalogComponent},
  {path:'',pathMatch:'full',component:HomepageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
