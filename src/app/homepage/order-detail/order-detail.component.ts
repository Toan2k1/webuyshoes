import { Component, OnInit } from '@angular/core';
import {CartServiceService} from "../../service/cart-service.service";
import {OderService} from "../../service/oder.service";
import {Order} from "../../models/Order";
import {OrderCancel} from "../../models/OrderCancel";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  status="Đã Hủy Đơn Hàng"
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

  cancel(id:any) {
   const data:OrderCancel={
     id:id,
     status:this.status
    }
    this.orderService.editOrder(data).subscribe(
      res => {
        alert("Hủy đơn hàng thành công")
      }
    )
  }
}
