import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../models/product";
import { CatalogService } from 'src/app/service/catalog.service';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  listProduct:Product[]=[];
  listSearch: Product[]=[];
  id:any;
  form!: FormGroup;
  constructor(private productService: ProductService, private catalogService: CatalogService,
              private activeRoute:ActivatedRoute,private formbuilder : FormBuilder,private router: Router
              ) { }

  ngOnInit(): void {

    this.form= new FormGroup(
      {
        search:new FormControl("")
      }
    )
    this.activeRoute.paramMap.subscribe(data=> {
      this.id=data.get('id');
    })
    this.getlistProductsByCatalogName()
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
  Search(){
    const block2 = document.getElementById("listProduct") as HTMLElement;
    const block1 = document.getElementById("searchProduct") as HTMLElement;
    const data=this.form.value.search
    this.productService.Search(data).subscribe((result: any) => {
      this.listSearch = result
      console.log(this.listSearch)
      if (this.listSearch != null) {
        block2.classList.add('hidden')
        block1.classList.add('block')
      }
    })
  }

}
