import {Component, OnInit} from '@angular/core';
import {SwiperOptions} from "swiper";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from 'src/app/service/product.service';
import {Product} from 'src/app/models/product';
import {CartServiceService} from "../../service/cart-service.service";
import {Cart} from "../../models/cart";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  id: number = 0;
  product: Product = new Product();

  config: SwiperOptions = {
    loop: true,
    speed: 4000,
    autoplay: {
      delay: 2000
    },
    pagination: {el: '.swiper-pagination', clickable: true},
    /* navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev'
     },*/
    spaceBetween: 30
  };
  form! : FormGroup

  constructor(private _route: ActivatedRoute, private productService: ProductService, private cartService: CartServiceService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      quantity: new FormControl(1),
    });
    this.id = this._route.snapshot.params.id;
    this.productService.getOne(this.id).subscribe(res => {
      this.product = res;
      console.log(this.product);
    })

  }

  addToCart(id: any) {
    const data: Cart = {
      id: id,
      quantity: this.form.value.quantity
    }
    this.cartService.addToCart(data).subscribe(res => {
      console.log(res)
    })
  }


}
