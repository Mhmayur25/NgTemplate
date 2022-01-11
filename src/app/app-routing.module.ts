import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [

  {
    path:'',
    component:AuthenticationComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule),
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
