import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { verify } from 'crypto';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  public searchJson: any;
  public rut_Client = "";
  public rut_Worker = "";
  public CartItem = new Object();
  public buyJson: any;
  constructor( private cartservice: CartService) {
    for(let x=0;x<localStorage.length;x++){
      let keyy = localStorage.key(x)
      let value = JSON.parse(localStorage.getItem(keyy)) 
      this.CartItem[keyy] = value;
    }
  } 
  
  Totalprice(id:number){
    let value = JSON.parse(localStorage.getItem(id)) 
    let total = value.precio*value.cantidad;
    return total
  }

  Buy(){
    var venta = {
      "Rut_cliente": Number(this.rut_Client), 
      "Rut_trabajador": Number(this.rut_Worker), 
      "detalle": {}
    }
    for(let x=0;x<localStorage.length;x++){
      let keyy = localStorage.key(x)
      let value = JSON.parse(localStorage.getItem(keyy))
      let id:number = value.id_producto
      venta.detalle[id] = value.cantidad
    }
    JSON.stringify(venta.detalle)
    this.cartservice.CreateSale(venta)
    .subscribe(respuesta => {
      this.buyJson = respuesta
    })
  }

  RemoveItem(id:number){
    localStorage.removeItem(id);
    delete this.CartItem[id];
  }

  ngOnInit(): void {
  }
}
  


