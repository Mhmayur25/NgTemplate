import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription'; 
import { menuList } from '../lookups/menu-list.lookup';
@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  invoceBreadcrumbFunction = new EventEmitter();    
  subBreadcrumb: Subscription;    

  constructor(private _menuList:menuList) { }


  loadMenu(role){
    return this._menuList[role];
  }

  loadbreadcrumb(breadcrumb) {    
    this.invoceBreadcrumbFunction.emit(breadcrumb);    
  }

}
