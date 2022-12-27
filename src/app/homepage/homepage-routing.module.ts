import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {CartComponent} from "./cart/cart.component";
import {ProductdetailComponent} from "./productdetail/productdetail.component";
import {SignInComponent} from "../login/sign-in/sign-in.component";
import {ProductComponent} from "./product/product.component";
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'home', component:HomepageComponent},
  {path: 'cart', component:CartComponent},
  {path: 'login', component:SignInComponent},
  {path: 'productdetail', component:ProductdetailComponent},
  {path: 'product', component:ProductComponent},
  {path: 'about', component:AboutComponent},
  {path:'',pathMatch:'full',component:HomepageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
