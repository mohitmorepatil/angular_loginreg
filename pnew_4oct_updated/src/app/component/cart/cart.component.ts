import { Component, OnInit ,Input } from '@angular/core';
import {ProductService} from '../../services/product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productService:ProductService) { }

  

  ngOnInit() {
    this.getCartProd();
  }

  cartProds:Array<any>=[]
  getCartProd() {
    this.productService.cartProd.subscribe(prod => {
      debugger;
      this.cartProds.push(prod);
    }, err => {
      console.log(err);
    });
  }
  

}
