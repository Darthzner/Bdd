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
	res:any=[];
	data:any;

	ngOnInit(): void {
	}

	Check_data(model: any){
		this.authService.get_client(model).subscribe(async data => {this.data = await data;
			console.log(this.data[0]);});
	}

	AddClient(f: NgForm) {
		var model = {rut:f.value.rut,
								nombre:f.value.nombre,
								direccion:f.value.direccion,
								correo:f.value.correo};

		//this.Check_data(model);
		
		//console.log(this.data);

		this.authService.register_client(model).subscribe(res=>{
			alert(res.toString());
		});
	}

	AddEmployer(f: NgForm) {
		var model = {rut:f.value.rut,
								nombre:f.value.nombre,
								puesto:f.value.puesto,
								salario:f.value.salario};

		this.authService.register_employer(model).subscribe(res=>{
			alert(res.toString());
		});
	}
}
