import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {UserService} from '../../services/user.service';
import {UserCredLogin} from '../../models/user-cred-login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  constructor(private http:Http,private httpClient:HttpClient,private userService:UserService) { }


 /* users:Array<any>=[
    {
      "customer":{
      "email":"usa@gmail.com",
      "firstname":"mohit",
      "lastname":"more",
      "storeId":"1",
      "websiteId":"1"
      },
      "password":"Pass@54456456"
    }
  ];*/

  users:any= {
    "customer":{
    "email":"ani@gmail.com",
    "firstname":"ani",
    "lastname":"sdfsdf",
    "storeId":"1",
    "websiteId":"1"
    },
    "password":"Pass@56456"
}


adminCredentials:UserCredLogin={"username":"admin","password":"admin123"};

 

  ngOnInit() {
  }
 
  userSave(){
  
this.userService.getToken1(this.adminCredentials)
.subscribe(()=>{
  debugger;
})


  }




}
