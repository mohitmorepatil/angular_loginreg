import { Injectable } from '@angular/core';
import {UserLogin} from '../models/user-login';
import {BehaviorSubject ,Observable,Subscriber} from 'rxjs';
import {HttpHeaders ,HttpClient} from '@angular/common/http';
import { map ,catchError} from 'rxjs/operators';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
public apiURL:'http://192.168.2.41/magento225/index.php/rest/V1/integration/admin/token';
  public userLogin:BehaviorSubject<UserLogin>=new BehaviorSubject<UserLogin>(null);
  constructor(private httpClient:HttpClient) { }
  userData= [{"username":"admin","password":"admin123"}];//"username=" + 'admin' + "&password=" + "admin123" + "&grant_type=password";
  login(user:UserLogin){
   
    
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','No-Auth':'True' });
 /*   let token= new Observable((o) =>{
      debugger;
     /* this.httpClient.post(this.apiURL+ '/token',userData,{ headers: reqHeader }).pipe(
        map(res => res)
        );
*/
      
  /*    this.httpClient.put('http://192.168.2.41/magento225/index.php/rest/V1/integration/admin/token',JSON.stringify(this.userData),{ headers: reqHeader }).subscribe((r)=>{
        // o.next(r);
         console.log(r);
         localStorage.setItem('token',JSON.stringify(r));
       });

    });*/
/*let token= this.httpClient.post(this.apiURL+ '/token',userData,{ headers: reqHeader })
.pipe(
  map(res => res)
  );
*/
let token= new Observable((o) =>{
  debugger;
  this.httpClient.put('http://192.168.2.41/magento225/index.php/rest/V1/integration/admin/token',this.userData,{ headers: reqHeader }).pipe(
    map(res => res)
    );

  
 /* this.httpClient.put('http://192.168.2.41/magento225/index.php/rest/V1/integration/admin/token',this.userData,{ headers: reqHeader }).subscribe((r)=>{
     o.next(r);
     localStorage.setItem('token',JSON.stringify(r));
   });
*/
});

localStorage.setItem('token',JSON.stringify(token));

//let token=this.getToken1();
if(localStorage.getItem('token')){
  debugger;
  this.userLogin.next(user);
}else{
  console.log('You are a unathorized user');
}
  

   
  }

  

  getToken1(){
   
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','No-Auth':'True' });
    let token= new Observable((o) =>{
      debugger;
      this.httpClient.put('http://192.168.2.41/magento225/index.php/rest/V1/integration/admin/token',this.userData,{ headers: reqHeader }).pipe(
        map(res => res)
        );

      
     /* this.httpClient.put('http://192.168.2.41/magento225/index.php/rest/V1/integration/admin/token',this.userData,{ headers: reqHeader }).subscribe((r)=>{
         o.next(r);
         localStorage.setItem('token',JSON.stringify(r));
       });
*/
    });

    localStorage.setItem('token',JSON.stringify(token));
  }
  /*storeToken(token: string){
    localStorage.setItem('token',token);
  }*/


  logout(user:UserLogin){
    this.userLogin.next(null);
   }
}
