import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from "ng-apexcharts";
import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { PerticularsComponent } from './perticulars/perticulars.component';
import { MaterialModules } from '../material-modules';

@NgModule({
  declarations: [DashboardComponent, UsersComponent, PerticularsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModules,
    NgApexchartsModule
  ]
})
export class MainModule { }
