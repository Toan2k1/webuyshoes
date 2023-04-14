import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";
import {MatDialog} from "@angular/material/dialog";
import {CartComponent} from "../../../../../websites/src/app/homepage/cart/cart.component";
import { Router } from '@angular/router';
import {Product} from "../../models/product";
import { ProductService } from 'src/app/service/product.service';
import { FeedbackService } from 'src/app/service/feedback.service';
import {Feedback} from "../../models/feedback";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  listFeedback: any[] = []
  listProductLatest:Product[]=[]
  config: SwiperOptions = {
    loop:true,
    speed:4000,
    autoplay:{
      delay:2000
    },
    pagination: { el: '.swiper-pagination', clickable: true },
    spaceBetween: 30
  };
  form!: FormGroup;


  constructor(private router :Router,private productService:ProductService,private feedbackService:FeedbackService) { }

  ngOnInit(): void {
    this.form= new FormGroup(
      {
        content:new FormControl("")
      }
    )
    this.getlistProductsLatest()
    this.getlistFeedback()
  }
  getlistProductsLatest(){
    this.productService.getlistProductlates().subscribe(res => {
      this.listProductLatest=res.slice(1,9);
      console.log(this.listProductLatest)
    })
  }
  getlistFeedback(){
    this.feedbackService.getlistFeedback().subscribe(res => {
      this.listFeedback=res
      console.log(this.listFeedback)
    })
  }
addFeedback(){

    const data: Feedback = {
      content: this.form.value.content
    }
    console.log(data)
    this.feedbackService.addFeedback(data).subscribe(res => {
      this.getlistFeedback()
    })
}
}
