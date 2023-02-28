import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";
import {Order} from "../models/Order";
import {Cart} from "../models/cart";

@Injectable({
  providedIn: 'root'
})
export class OderService {

  constructor(private httpclient:HttpClient) { }
  getlistOrder():Observable<Order[]>{
    return this.httpclient.get<Order[]>(`http://localhost:8000/api/order/getList`);
  }
  addToOrder(order:Order){
    return this.httpclient.post<any>('http://localhost:8000/api/order/checkOut',order)
  }
}
