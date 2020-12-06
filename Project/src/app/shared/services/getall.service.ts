import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class GetallService {

	readonly APIUrl= "http://190.163.174.21:5000";

	constructor(private http:HttpClient) { }

	getAllClientes():Observable<any[]>{
		return this.http.get<any>(this.APIUrl+'/getAllClientes');
	}
	getAllPersonal():Observable<any[]>{
		return this.http.get<any>(this.APIUrl+'/getAllPersonal');
	}
	getAllProd():Observable<any[]>{
		return this.http.get<any>(this.APIUrl+'/getAllProd');
	}
	getAllVentas():Observable<any[]>{
		return this.http.get<any>(this.APIUrl+'/getAllVentas');
	}
	getStock():Observable<any[]>{
		return this.http.get<any>(this.APIUrl+'/getstock1');
	}
	getProdVendido():Observable<any[]>{
		return this.http.get<any>(this.APIUrl+'/getProductosVendidos');
	}
}
