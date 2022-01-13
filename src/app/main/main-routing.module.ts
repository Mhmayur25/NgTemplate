import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { PerticularsComponent } from './perticulars/perticulars.component';
const routes: Routes = [
  {
    path:'',
    component: DashboardComponent
  },
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'perticulars',
    component: PerticularsComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
