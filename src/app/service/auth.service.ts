import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  register(user: any){
    return this.http.post<any>('http://localhost:8000/api/registration',user)
  }
  login(user:any){
    return this.http.post<any>('http://localhost:8000/api/login',user)
  }

}
