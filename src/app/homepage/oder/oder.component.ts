import { Component, OnInit } from '@angular/core';
import {CartServiceService} from "../../service/cart-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OderService} from "../../service/oder.service";
import { Router } from '@angular/router';
import {SuccessDialogComponent} from "../success-dialog/success-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Order} from "../../models/Order";

@Component({
  selector: 'app-oder',
  templateUrl: './oder.component.html',
  styleUrls: ['./oder.component.scss']
})
export class OderComponent implements OnInit {

form!:FormGroup
  listCart!: any[];
  totalMoney:number = 0;


  constructor(private cartService: CartServiceService,private orderService: OderService,private router: Router,private dialog:MatDialog) {
  }

  ngOnInit(): void {
    this.getListCart();
    this.form= new FormGroup({
      fullName:new FormControl,
      contactNumber:new FormControl,
      address:new FormControl,
      amount:new FormControl
    })
  }


  getListCart() {

    this.cartService.getListCart().subscribe(res => {
      this.listCart=res.productCarts
      console.log(this.listCart)
      this.listCart.forEach((item:any)=>{
        this.totalMoney += item.totalprice;
      })

    })
  }

  addToOrder() {
    const data :  Order = {
      name: this.form.value.fullName,
      number:this.form.value.contactNumber,
      address:this.form.value.address,
      status:this.form.value.status,
      amount:this.totalMoney
    }
    this.orderService.addToOrder(data).subscribe(res=>{
      this.dialog.open(SuccessDialogComponent,
        {
          width:'30%',
          height:'40%'
        });
    })
  }
}
