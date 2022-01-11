import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModules } from '../material-modules';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TroubleComponent } from './trouble/trouble.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { OtpverificationComponent } from './otpverification/otpverification.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SigninComponent, SignupComponent, TroubleComponent, SetpasswordComponent, OtpverificationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModules,
    FormsModule
  ]
})
export class AuthModule { }
