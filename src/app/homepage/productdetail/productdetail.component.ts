import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
