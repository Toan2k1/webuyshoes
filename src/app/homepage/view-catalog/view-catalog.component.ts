import { Component, OnInit } from '@angular/core';
import {CatalogService} from "../../service/catalog.service";
import {Catalog} from "../../models/Catalog";

@Component({
  selector: 'app-view-catalog',
  templateUrl: './view-catalog.component.html',
  styleUrls: ['./view-catalog.component.scss']
})
export class ViewCatalogComponent implements OnInit {
 listCatalog!:Catalog[]
  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.getlistCatalog();
  }
  getlistCatalog(){
    this.catalogService.getlistCatalog().subscribe(res => {
      this.listCatalog=res;
      console.log(this.listCatalog)
    })
  }
}
