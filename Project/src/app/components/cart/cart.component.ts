import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  public searchJson: any;
  public CartItem = new Object();
  constructor( private cartservice: CartService) {
    for(let x=0;x<localStorage.length;x++){
      let keyy = localStorage.key(x)
      let value = JSON.parse(localStorage.getItem(keyy)) 
      this.CartItem[keyy] = value;
      console.log(this.CartItem[keyy])
      //this.CartItem = this.cartservice.getCartItems();
    }
  }
 /*clearCartItems() {
    this.CartItem = {}
    this.cartservice.clearCart
  }*/
  
  Totalprice(id:number){
    let value = JSON.parse(localStorage.getItem(id)) 
    let total = value.precio*value.cantidad;
    return total
  }

  Buy(){
    
  }

  RemoveItem(id:number){
    localStorage.removeItem(id);
    delete this.CartItem[id];
    console.log(localStorage);
  }

  ngOnInit(): void {
    
  }
}
  


