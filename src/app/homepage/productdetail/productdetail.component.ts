import {Component, OnInit} from '@angular/core';
import {SwiperOptions} from "swiper";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from 'src/app/service/product.service';
import {Product} from 'src/app/models/product';
import {CartServiceService} from "../../service/cart-service.service";
import {Cart} from "../../models/cart";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductComment} from "../../models/ProductComment";


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  id: number = 0;
  product: Product = new Product();
  productDetail:any[]=[];

  form! : FormGroup
  form1! : FormGroup

  constructor(private _route: ActivatedRoute, private productService: ProductService, private cartService: CartServiceService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      quantity: new FormControl(1),
    });
    this.form1 = new FormGroup({
      content:new FormControl()
    });
    this.id = this._route.snapshot.params.id;
    this.productService.getOne(this.id).subscribe(res => {
      this.product = res;
      console.log(this.product);
    })
    this.productService.getOne(this.id).subscribe((res:any) => {
      this.productDetail = res.comments;
      console.log(this.productDetail);
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
  convertNumber(s: any) {
    if(typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }

  confirm(id:number) {
    const data: ProductComment = {
      id:id,
      content:this.form1.value.content
    };
      this.productService.addComment(data).subscribe(res => {
        console.log(res);
      })
  }
}
