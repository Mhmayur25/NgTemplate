import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  
  bgTheme:any = "linear-gradient(to right, #8DC26F, #76b852) no-repeat";


  bgColors:any[] =[
      'linear-gradient(to right, #8DC26F, #76b852) no-repeat',
      'linear-gradient(to right, #2193b0, #6dd5ed) no-repeat',
      'linear-gradient(to right, #373b44, #4286f4) no-repeat',
      'linear-gradient(to right, #f953c6, #b91d73) no-repeat',
      'linear-gradient(to right, #fe8cc6, #fed1c7) no-repeat',
      'linear-gradient(to right, #ff416c, #ff4b2b) no-repeat',
      'linear-gradient(to right, #f7971e, #ffd200) no-repeat',

      'linear-gradient(to right, #7f00ff, #e10eff) no-repeat',
      'linear-gradient(to right, #fbb040, #f9ed32) no-repeat',
      'linear-gradient(to right, #00a1fe, #00fe8f) no-repeat',
      'linear-gradient(to right, #ee2a7b, #ff7db7) no-repeat',
      'linear-gradient(to right, #ff1dd4, #02ddfe) no-repeat',
      'linear-gradient(to right, #ef4135, #fbb040) no-repeat',
      'linear-gradient(to right, #2d388a, #00aeef) no-repeat',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
