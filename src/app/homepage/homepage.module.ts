import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import {HomepageComponent} from "./homepage/homepage.component";
import {CartComponent} from "./cart/cart.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ProductdetailComponent} from "./productdetail/productdetail.component";
import {NgxUsefulSwiperModule} from "ngx-useful-swiper";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomepageComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    ProductdetailComponent,
    ProductComponent,
    AboutComponent,
  ],
    imports: [
        CommonModule,
        HomepageRoutingModule,
        NgxUsefulSwiperModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule
    ]
})
export class HomepageModule { }
