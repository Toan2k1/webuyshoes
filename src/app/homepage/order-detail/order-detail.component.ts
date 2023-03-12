import { Component, OnInit } from '@angular/core';
import {CartServiceService} from "../../service/cart-service.service";
import {OderService} from "../../service/oder.service";
import {Order} from "../../models/Order";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {


  order!:any[] ;
  totalMoney:number = 0;
  constructor(private cartService: CartServiceService,private orderService: OderService) {
  }

  ngOnInit(): void {
    this.getlistOrder();
  }
  convertNumber(s: any) {
    if(typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }


  getlistOrder(){
    this.orderService.getlistOrder().subscribe(res => {
      this.order = res
      console.log(res)
    })
  }
}
