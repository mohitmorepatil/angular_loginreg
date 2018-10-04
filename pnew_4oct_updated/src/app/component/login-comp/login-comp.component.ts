import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../../models/user-login';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

  constructor(private router:Router ,private loginService:LoginService) { }

  ngOnInit() {
  }


  login(un:any,pass:any){
    debugger;

    if(un.value=="mohit" && pass.value=="pass"){
      sessionStorage.setItem("Users",un.value);
      let user=new UserLogin();
      user.name=un.value;
      user.password=pass.value;
      user.role='admin';
      this.loginService.login(user);
      sessionStorage.setItem('userObj',JSON.stringify(user) );
      this.router.navigate(['user']);
    }else{
      this.router.navigate(['login']);
    }

  }
}
