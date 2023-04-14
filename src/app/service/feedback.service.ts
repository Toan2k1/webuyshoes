import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";
import {Feedback} from "../models/feedback";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpclient:HttpClient) { }
  getlistFeedback(){
    return this.httpclient.get<any>(`http://localhost:8000/getListFeedback`);
  }
  addFeedback(data: Feedback){
    return this.httpclient.post<any>(`http://localhost:8000/addFeedBack`,data);
  }
}
