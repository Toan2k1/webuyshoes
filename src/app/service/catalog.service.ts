import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../models/Order";
import {Catalog} from "../models/Catalog";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private httpclient:HttpClient) { }
  getlistproductByCatalog(id:number){
    return this.httpclient.get(`http://localhost:8000/api/cate/getById/`+ id);
  }
  getlistCatalog():Observable<any[]>{
    return this.httpclient.get<any[]>(`http://localhost:8000/api/cate/list`);
  }
}
