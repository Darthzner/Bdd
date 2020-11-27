import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	constructor(private authService: AuthService) { }

	@Input() dep:any;
	rut:any;
	nombre:any;
	direccion:any;
	correo:any;
	puesto:any;
	salario:any;
	data:any;

	ngOnInit(): void {
	}

	AddClient(f: NgForm) {
		var model = {rut:f.value.rut,
								nombre:f.value.nombre,
								direccion:f.value.direccion,
								correo:f.value.correo};

		this.authService.get_client(model).subscribe(data => {this.data =data;
			if(typeof data[0] ==='undefined'){
				console.log("Se creo.");
				this.authService.register_client(model).subscribe(res=>{
					alert(res.toString());
				});
			}
			else{
				console.log("Ya existe.");
			}
		});
	}

	AddEmployer(f: NgForm) {
		var model = {rut:f.value.rut,
								nombre:f.value.nombre,
								puesto:f.value.puesto,
								salario:f.value.salario};

		this.authService.get_employer(model).subscribe(data => {this.data =data;
			if(typeof data[0] ==='undefined'){
				console.log("Se creo.");
				this.authService.register_employer(model).subscribe(res=>{
					alert(res.toString());
				});
			}
			else{
				console.log("Ya existe.");
			}
		});
	}
}
