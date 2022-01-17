import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { MenuListService } from '../services/menu-list.service';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  @ViewChild('drawer') appDrawer: MatSidenav;

  isDarkMode:boolean = false;

  menuList:any;
  breadcrumb:String = 'Dashboard';

  constructor(public _renderer : Renderer2, private _MenuListService: MenuListService, public router: Router) { 

    if (this._MenuListService.subBreadcrumb == undefined) {    
      this._MenuListService.subBreadcrumb = this._MenuListService.    
      invoceBreadcrumbFunction.subscribe((name:string) => {    
        if(name != undefined && name != null)
          this.breadcrumb = name;
      });    
    }    
  }

  ngOnInit(): void { 

    this.menuList = this._MenuListService.loadMenu('admin');
    this.getCurrentBreadcrumb();
  }
  
  ngAfterViewInit(): void {
   
  }


  getCurrentBreadcrumb()
  {
    var filteredList =  this.menuList.filter((val)=>{
      return val.route ==  this.router.url;
    });
    if(filteredList != undefined && filteredList.length >0)
    {
      this.breadcrumb = filteredList[0].pageTitle;
    }
  }

  switchTheme()
  {
    console.log(this.isDarkMode);
    if(this.isDarkMode)
    {
      this._renderer.addClass(document.body, 'darkMode');
    }
    else{
      this._renderer.removeClass(document.body, 'darkMode');
    }
  }

}
