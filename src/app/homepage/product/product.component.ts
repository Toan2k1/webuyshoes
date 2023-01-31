import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  listProduct:Product[]=[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getlistProducts();
  }
  getlistProducts(){
    this.productService.getlistProduct().subscribe(res => {
      this.listProduct=res;
    })
  }
}
