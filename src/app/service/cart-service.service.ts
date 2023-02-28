import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cart} from "../models/cart";

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http:HttpClient) { }
  addToCart(cart:Cart){
    return this.http.post<any>('http://localhost:8000/api/cart/add',cart)
  }
  getListCart(){
    return this.http.get<any>('http://localhost:8000/api/cart/getCart')
  }
  deleteCart = (id: string) => this.http.delete(`http://localhost:8000/api/cart/delete/${id}`)


}
