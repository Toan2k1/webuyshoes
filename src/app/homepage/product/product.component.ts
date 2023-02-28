import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../models/product";
import { CatalogService } from 'src/app/service/catalog.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  listProduct:Product[]=[];
  id:any;
  constructor(private productService: ProductService, private catalogService: CatalogService,
              private activeRoute:ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(data=> {
      this.id=data.get('id');
    })
    this.getlistProductsByCatalogName();
  }
  getlistProductsByCatalogName(){
    this.catalogService.getlistproductByCatalog(this.id).subscribe((res:any) => {
      this.listProduct=res.products;
      console.log(this.listProduct);
    })
  }
  convertNumber(s: any) {
    if(typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }
}
