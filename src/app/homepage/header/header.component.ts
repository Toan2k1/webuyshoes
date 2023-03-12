import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import {CartComponent} from "../../../../../websites/src/app/homepage/cart/cart.component";
import {ListUserService} from "../../service/list-user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username=localStorage.getItem("user");
  constructor(private usersservices: ListUserService, private router: Router) { }

  ngOnInit(): void {
    const iconuser=document.getElementsByClassName("iconuser")[0] as HTMLElement;
    const menu=document.getElementsByClassName("menu")[0]
    const activeuser=document.getElementsByClassName("user")[0] as HTMLElement
    const activesub=document.getElementsByClassName("sub")[0] as HTMLElement
    const sub2=document.getElementsByClassName("sub2")[0] as HTMLElement
    window.onscroll=()=>{
      if(window.scrollY>50)
      {
        menu.classList.add("active")
      }
      else {
        menu.classList.remove("active");
      }
    }

    if(this.username){
      sub2.style.display="none"
      activeuser.onclick=()=>{
        activesub.classList.toggle("is-active")
      }
    }else {
      activeuser.onclick=()=>{
        sub2.classList.toggle("is-active")
      }
    }
  }

  logout() {
    localStorage.clear()
    this.router.navigate(["home"])

  }
}
