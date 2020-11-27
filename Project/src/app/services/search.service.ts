import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private api  = `http://190.163.174.21:5000/`;

  constructor(private http: HttpClient) {}

   getSearch(){
     const path = `${this.api}getAllProd`;
     return this.http.get(path);
   }
   
}
