import { Component, OnInit, HostBinding, Input, ViewChild, Inject  } from '@angular/core';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatSidenav } from '@angular/material/sidenav';
import { LayoutComponent } from '../layout.component';
import { MenuListService } from '../../services/menu-list.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class NavigationComponent implements OnInit {
  @ViewChild('drawer') appDrawer: MatSidenav;
  expanded: boolean = false;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;

  @Input() item: any;

  @Input() depth: number;

  constructor( public router: Router, @Inject(LayoutComponent) private parent: LayoutComponent, private _MenuListService: MenuListService) { 

    if (this.depth === undefined) {
      this.depth = 0;
    }

  }

  breadcrumb:String;

  ngOnInit(): void {}

  onItemSelected(item: any) {
    if (!item.children || !item.children.length) {
      this._MenuListService.loadbreadcrumb(item.pageTitle);
      this.router.navigate([item.route]);
      this.parent.appDrawer.close();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
