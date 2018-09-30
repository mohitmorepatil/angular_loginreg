import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserReg } from '../models/user-reg';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  /*registerUser(user:UserReg) {
    debugger;
    const body={
      username:user.username,
      email:user.email,
      password:user.password
    }

     return new Observable((o) => {
      this.httpClient.put('https://angular6authentication.firebaseio.com/.json',body)
      .subscribe((res) => {
      //  this.userList = res;
      })
    })
  }*/

  create(user: UserReg) {
    return this.httpClient.post('/api/users', user);
  }
}
