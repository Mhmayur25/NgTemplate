import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TroubleComponent } from './trouble/trouble.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { OtpverificationComponent } from './otpverification/otpverification.component';

const routes: Routes = [
  {
    path:'',
    component:SigninComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'trouble',
    component:TroubleComponent
  },
  {
    path:'set-password',
    component:SetpasswordComponent
  },
  {
    path:'verify-otp',
    component:OtpverificationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
