import { Component, OnInit } from '@angular/core';
import {Cart} from "../../models/cart";
import {CartServiceService} from "../../service/cart-service.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 listCart:any[]=[];
  constructor(private cartService:CartServiceService) { }

  ngOnInit(): void {
this.getListCart();
  }
  getListCart(){
    this.cartService.getListCart().subscribe(res=>{
      this.listCart=res
      console.log(this.listCart)
    })
  }
}
