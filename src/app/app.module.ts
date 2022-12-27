import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HomepageModule} from "./homepage/homepage.module";
import {LoginModule} from "./login/login.module";
import {HttpClientModule} from "@angular/common/http";
import {NgxUsefulSwiperModule} from "ngx-useful-swiper";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomepageModule,
    NgxUsefulSwiperModule,
    NoopAnimationsModule,
    LoginModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
