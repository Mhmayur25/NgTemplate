import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  inputType:String ='password';
  authDetails:any ={};
  inputIcon:String="visibility"

  constructor() { }

  ngOnInit(): void {
  }

  toggleInput()
  {
    if(this.inputType == 'password')
    {
      this.inputType = 'text';
      this.inputIcon = 'visibility_off';
    }
    else{
      this.inputType = 'password';
      this.inputIcon = 'visibility';
    }
  }

}
