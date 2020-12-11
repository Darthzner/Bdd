import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class GettService {

	readonly APIUrl= "http://54.152.11.197:5000";

	constructor(private http:HttpClient) { }

	get_ventast(model: any):Observable<any> {
		return this.http.get(this.APIUrl + '/getVentasT?fecha1=' + model.fecha1 + '&fecha2=' + model.fecha2);
	}
	get_ingresost(model: any):Observable<any> {
		return this.http.get(this.APIUrl + '/getIngresosT?fecha1=' + model.fecha1 + '&fecha2=' + model.fecha2);
	}
	get_personalpro(model: any):Observable<any> {
		return this.http.get(this.APIUrl + '/getPersonalPro?fecha1=' + model.fecha1 + '&fecha2=' + model.fecha2);
	}
}
