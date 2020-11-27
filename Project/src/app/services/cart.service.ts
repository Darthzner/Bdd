import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  
})
export class CartService {
  cartItems = [];
  private api  = `http://localhost:4200/`;
  

  constructor(private http: HttpClient) { }

  addCart($s){
    this.cartItems.push($s);
  }

  getCartItems(){
    return this.cartItems
  }

  clearCart(){
    this.cartItems = [];
  }

}
