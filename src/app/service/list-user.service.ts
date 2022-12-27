import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class ListUserService {

  constructor( private http:HttpClient) { }
getListUser():Observable<User[]>{
  return this.http.get<User[]>('http://localhost:8000/api/getListUser',{}).pipe()
}
}
