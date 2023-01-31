import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";
import {MatDialog} from "@angular/material/dialog";
import {CartComponent} from "../../../../../websites/src/app/homepage/cart/cart.component";
import { Router } from '@angular/router';
import {Product} from "../../models/product";
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  config: SwiperOptions = {
    loop:true,
    speed:4000,
    autoplay:{
      delay:2000
    },
    pagination: { el: '.swiper-pagination', clickable: true },
   /* navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },*/
    spaceBetween: 30
  };


  constructor(private router :Router,private productService:ProductService) { }

  ngOnInit(): void {
  }


}
