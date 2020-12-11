import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
	selector: 'app-addproducto',
	templateUrl: './addproducto.component.html',
	styleUrls: ['./addproducto.component.css']
})
export class AddproductoComponent implements OnInit {

	Caso1='';

	constructor(private authService: AuthService) { }

	nombre:any;
	stock:any;
	precio:any;
	categoria:any;
	descripcion:any;

	ngOnInit(): void {
	}

	AddProducto(f: NgForm)
	{
		var model = {nombre:f.value.nombre,
								stock:f.value.stock,
								precio:f.value.precio,
								categoria:f.value.categoria,
								descripcion:f.value.descripcion};

		this.authService.add_producto(model).subscribe(res=>{
			alert(res.toString());
			this.Caso1='Exito.';
		});
	}

}
