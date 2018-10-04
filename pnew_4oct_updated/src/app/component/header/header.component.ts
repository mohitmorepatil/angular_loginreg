import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../models/user-login';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public user:UserLogin=new UserLogin();
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
    //debugger;
        this.loginService.userLogin.subscribe((user:UserLogin)=>{
          if(user==null){
            this.user=new UserLogin();
          }else{
            this.user=user;
          }
        });
  }

  logout(){
    this.user=new UserLogin();
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
