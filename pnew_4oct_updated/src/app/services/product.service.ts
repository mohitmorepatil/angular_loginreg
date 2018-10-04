import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Http,Headers, Response, RequestOptions, RequestMethod} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ProductList} from '../models/product-list';
import { map } from 'rxjs/operators';
import{BehaviorSubject,Subscriber} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http, private httpClient: HttpClient) { }
  productsList: Array<any> = [];
  public cartData:BehaviorSubject<any>=new BehaviorSubject<any>(null);
  cartProd = this.cartData.asObservable();

  getProductData() {
debugger;
    return new Observable((o) => {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin':'*'
        })
      };
    // alert(JSON.stringify(httpOptions))
      this.httpClient.get('https://angular6authentication.firebaseio.com/.json')
        .subscribe((result:Array<any>) => {
          debugger;
          alert('success')
          this.productsList = result;
          o.next(this.productsList);
        });

   

    });
  }

getCartData(option){ 
  debugger; 
  this.cartData.next(option);
}
  

 /* getProductData2() {
    debugger;
        return new Observable((o) => {
    
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Access-Control-Allow-Origin':'*'
            })
          };
        // alert(JSON.stringify(httpOptions))
          this.httpClient.get('/api')
            .subscribe((result:Array<ProductList>) => {
              debugger;
              alert('success')
              this.productsList = result;
              o.next(this.productsList);
            });
    
       
    
        });
      }
*/

 


}
