import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cart} from "../models/cart";

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http:HttpClient) { }
  addToCart(cart:Cart){
    return this.http.post<any>('http://localhost:8000/api/Cart/addToCart',cart)
  }
  getListCart(){
    return this.http.get<any>('http://localhost:8000/api/Cart/getCartDetails')
  }

}
