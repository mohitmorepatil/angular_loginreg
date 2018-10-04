import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http,Headers, Response, RequestOptions, RequestMethod} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserCredLogin} from '../models/user-cred-login';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http, private httpClient: HttpClient) { }

 /* users:Array<any>=[
    {
      "customer":{
      "email":"user@example.com",
      "firstname":"John",
      "lastname":"Doe",
      "storeId":"1",
      "websiteId":"1"
      },
      "password":"admin124"
        
      
    }
  
  ];*/
  users: Array<any> = [];
  adminCreds:Array<any>=[];
  regToken:string;
  
  getToken(adminCred){
    this.adminCreds=adminCred;
   // return new Observable((o) => {
      //debugger;
   
    //let  reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth': 'true'});
          
              const httpOptions1 = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'pace-useragent':'rest',
                  'Accept': 'application/json'
                })
              };
          
            //alert(JSON.stringify(this.adminCreds)); 
       /*     return new Observable((o) => {
             // debugger;
           
       
                    /*
                     const httpOptions = {
                        headers: new HttpHeaders({
                          'Content-Type':  'application/json',
                           'Access-Control-Allow-Origin':'*'
                        })
                      }; 
                      */
                      
                     
                    /*  let cookie = "sessionId=xxzzxzxzx;realm:PTPL";
                      let apiHeader = new HttpHeaders();
                      let contentType = apiHeader.append('Content-Type', 'application/json');
                      let aControl = contentType.append('Access-Control-Allow-Origin', '*');
                      let pace = aControl.append('pace-useragent', 'rest');
                      let hCookie = pace.append('Cookie', cookie);
                    */  

                      // alert(this.adminCreds); 
                    //  let str="username='admin'&password='admin123'";
                     // alert(str);
                      
                 /*     this.httpClient.post('http://192.168.2.41/magento225/index.php/rest/V1/integration/admin/token',JSON.stringify(this.adminCreds),httpOptions)
                      .subscribe((res:any) => {
                          console.log(res);
                         // debugger;
                          //this.regToken = res;
                          //o.next(this.regToken);
                        });
                */

         /*      this.httpClient.post('http://192.168.2.41/magento225/index.php/rest/V1/integration/admin/token',JSON.stringify(this.adminCreds),httpOptions)//,JSON.stringify(this.adminCreds)
               .subscribe((res:any) => {
                  alert('Google called success');
                  // debugger;
                   //this.regToken = res;
                   //o.next(this.regToken);
                 });
*/
/*let cookie = "sessionId=xxzzxzxzx;realm:PTPL";
let apiHeader = new HttpHeaders();
let contentType = apiHeader.append('Content-Type', 'application/json');
let aControl = contentType.append('Access-Control-Allow-Origin', '*');
let pace = aControl.append('pace-useragent', 'rest');
let cook = pace.append('Cookie', cookie);
let hCookie = cook.append('Request Method', 'POST');
let ccook = hCookie.append('Accept', 'application/json');
let body={"username":"admin","password":"admin123"}


alert(JSON.stringify(apiHeader));return;

    return new Promise((resolve, reject) => {
      this.httpClient.post('http://192.168.2.41/magento225/index.php/rest/V1/integration/admin/token',JSON.stringify(body),{headers:apiHeader}).subscribe(res => {
        resolve(res);
      }, (error) => {
        reject(error);
      });
    });
*/
const headers = new Headers();
headers.append('Content-Type', 'application/json');
let options = new RequestOptions({ headers: headers });

/*return new Observable((o) => {
 this.http.post('http://192.168.2.41/magento225/index.php/rest/V1/integration/admin/token', JSON.stringify(this.adminCreds),options)
        .subscribe((response: Response) => {
            // login successful if there's a jwt token in the response
            let token = response;
            console.log(response);

        });

      });*/
              /* this.httpClient.post('http://192.168.2.41/magento225/index.php/rest/V1/integration/admin/token',JSON.stringify(this.adminCreds),httpOptions)
               .subscribe((res:any) => {
                   debugger;
                   this.regToken = res;
                   o.next(this.regToken);
                 });*/

  
                      
                    
                
        /*        
           })

           */

           /* this.httpClient.post('http://192.168.2.41/magento225/index.php/rest/V1/integration/admin/token',JSON.stringify(this.adminCreds))
            .subscribe((res:any) => {
              debugger;
              localStorage.setItem('token',res);
              this.regToken = res;
              o.next(this.regToken);
            });*/
           /* return this.httpClient.post<{token: string}>('http://192.168.2.41/magento225/index.php/rest/V1/integration/admin/token',JSON.stringify(this.adminCreds))
            .pipe(
              map(result => {
                localStorage.setItem('access_token', result.token);
                return true;
              })
            );*/
        
       
        
  // })
    
  }


  getToken1(adminCred:UserCredLogin): Observable<any> {    

    let head = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ url:'http://192.168.2.41/magento225/index.php/rest/V1/integration/admin/token',headers: head ,method:'POST',body:JSON.stringify(adminCred),responseType:0,withCredentials:false});
    alert(JSON.stringify(options));

    
  /*  const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'pace-useragent':'rest',
        'Accept': 'application/json; charset=utf-8',
        'Request-Method':'post'
      })
    };
   */
  const httpOptions = {headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').set('Access-Control-Allow-Origin','content-type')};
  
    alert(JSON.stringify(adminCred));

    let formData:FormData = new FormData();  
     formData.append('user_id','74'); 

    return this.httpClient.post('http://192.168.2.41/magento225/index.php/rest/V1/integration/admin/token',JSON.stringify(adminCred),httpOptions)
       .pipe(
         map((response: Response) => {
            // login successful if there's a jwt token in the response
            let token = response.json() && response.json().token;
            console.log(response);
        })
      );
}


  /*gettoken1():Observable<any>{
    let reqHeader= new Headers({'Content-Type':'application/json'});
    let data="username='admin'&password='admin123'";
   return this.http.post('http://192.168.2.41/magento225/index.php/rest/V1/integration/admin/token',data,{headers:reqHeader})
    .pipe(map(res => res.json()));
  }
*/
  saveData(user){
 
    this.users=user;
    return new Observable((o) => {
      debugger;
   /*   this.httpClient.put('https://demo2-c9a1a.firebaseio.com/.json',JSON.stringify(this.users))
        .subscribe((result:Array<User>) => {
          this.users = result;
          o.next(this.users);
        });
*/
 


     
    /* this.httpClient.put('https://angular6authentication.firebaseio.com/.json',JSON.stringify(this.users))
        .subscribe((result:Array<any>) => {
          this.users = result;
          o.next(this.users);
          });
*/
   
   /* this.httpClient.post('http://192.168.2.41/magento225/index.php/rest/V1/customers/',JSON.stringify(this.users),{
      headers: new HttpHeaders({
        'Authorization': 'Auth_Token',
        'Access-Control-Allow-Origin':'*',
        'RequestToken': 'wwul7mt2l61ekrtu7w3ew3sx5dsc2pb2'
      })
    }).subscribe((result) => {
          this.users =JSON.parse(JSON.stringify(result) );
              o.next(this.users);
            });
     */       
/*
        this.http.post('http://192.168.2.41/magento225/index.php/rest/V1/customers/',this.users,{headers:reqHeader}).subscribe((result) => {
            //  this.users =JSON.parse(JSON.stringify(result));
              console.log(this.users);
              o.next(this.users);
            });*/
            
              const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  'Authorization': '03uhrcrq8fpe27neokitxjd1193r2nxt' ,
                  'Access-Control-Allow-Origin':'*'
                })
              };
              alert(JSON.stringify(this.users) );
            //  alert(httpOptions); 
              
              
          /*    this.httpClient.post('http://192.168.2.41/magento225/index.php/rest/V1/customers/',JSON.stringify(this.users),httpOptions)
                .subscribe((result:any) => {
                  debugger;
                  this.users = result;
                  o.next(this.users);
                });
        */
               // return;
            
        
        
   })



  }


}
