import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";
import {ProductComment} from "../models/ProductComment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient:HttpClient) { }
  getlistProduct():Observable<Product[]>{
    return this.httpclient.get<Product[]>(`http://localhost:8000/api/product/getAll`);
  }
  getlistProductlates():Observable<Array<Product>>{
    return this.httpclient.get<Array<Product>>(`http://localhost:8000/api/product/getAll/?_limit=4`);
  }
  deleteProduct = (id: string) => this.httpclient.delete(`http://localhost:8000/api/product/deleteProduct/${id}`)
  addProduct(product: any){
    return this.httpclient.post<any>('http://localhost:8000/api/product/add-product',product)
  }
  editProduct=(data:any,id:number)=>this.httpclient.put<any>(`http://localhost:8000/api/product/edit-Product/`+id,data)

  getOne(id: number):Observable<Product>{
    return this.httpclient.get<Product>(`http://localhost:8000/api/product/getProductById/`+id);
  }
  addComment(data:ProductComment){
    return this.httpclient.post<ProductComment>(`http://localhost:8000/addComment`,data)
  }
}
