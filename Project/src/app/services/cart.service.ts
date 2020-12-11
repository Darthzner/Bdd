import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  
})
export class CartService {
  private api  = `http://54.152.11.197:5000/`;
  

  constructor(private http: HttpClient) { }

  CreateSale(productlist: any){
    const path = `${this.api}inVenta`;
    return this.http.post(path, productlist)
  }
}
