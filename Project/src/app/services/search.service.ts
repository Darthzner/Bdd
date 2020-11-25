import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = "assets/json/datos.json";
   }

   getSearch(){
     return this.http.get(this.url);
   }
}
