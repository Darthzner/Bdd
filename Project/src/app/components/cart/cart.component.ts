import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  public CartItem = new Object();
  constructor( private cartservice: CartService) {}
 /*clearCartItems() {
    this.CartItem = {}
    this.cartservice.clearCart
  }*/
  ngOnInit(): void {
    for(let x=0;x<localStorage.length;x++){
      let keyy = localStorage.key(x)
      let value = localStorage.getItem(keyy)
      this.CartItem[keyy] = value;
      //this.CartItem = this.cartservice.getCartItems();
    }
    console.log(this.CartItem)
  }
}
  


