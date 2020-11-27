import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	authUrl= "http://190.163.174.21:5000/users";
	APIUrl= "http://190.163.174.21:5000";

	constructor(private http:HttpClient) { }

	login(model: any){
		return this.http.post(this.authUrl, model).pipe(
			map((response: any)=>{
				const user = response;
				if(user.result.succeeded){
					localStorage.setItem('token', user.token);
				}
			})
		)
	}
	register_client(model: any) {
		return this.http.post(this.APIUrl + '/addClient', model);
	}
	register_employer(model: any) {
		return this.http.post(this.APIUrl + '/addEmployer', model);
	}
	get_client(model: any):Observable<any> {
		return this.http.get(this.APIUrl + '/getCliente?rut=' + model.rut).pipe(map((res:any)=>{return res;}));
	}
}
