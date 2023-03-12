import { Component, OnInit } from '@angular/core';
import {Cart} from "../../models/cart";
import {CartServiceService} from "../../service/cart-service.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  listCart: any[] = [];
   totalMoney:number = 0;
  constructor(private cartService: CartServiceService) {
  }

  ngOnInit(): void {
    this.getListCart();
    this.getCartTotalPrice();
  }


  getListCart() {
    this.cartService.getListCart().subscribe(res => {
      this.listCart=res.productCarts;
      console.log(this.listCart);
    })
  }
  getCartTotalPrice() {
    let total: number = 0;
    this.cartService.getListCart().subscribe((data: any) => {
      data.productCarts.forEach((item: any) => {
        total += item.totalprice;
        this.totalMoney = total;
      })
    }, err => {
      console.log(err);
    })
  }

  deleteCart(id:string) {
  this.cartService.deleteCart(id).subscribe(res=>{
    this.getListCart();
    alert("Thành Công");
    window.location.reload();
  })
  }
  convertNumber(s: any) {
    if(typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }
}

