import { Component,OnInit} from '@angular/core';
import { UserLogin } from './models/user-login';
import {LoginService} from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loginService:LoginService){

  }

  title = 'app';

ngOnInit(){

  let str=sessionStorage.getItem('userObj');
  if(str){
    let obj=JSON.parse(str);
    this.loginService.login(obj);
  }


}


}
