import { Component, OnInit } from '@angular/core';
import { GetallService } from 'src/app/shared/services/getall.service';

@Component({
	selector: 'app-getallventas',
	templateUrl: './getallventas.component.html',
	styleUrls: ['./getallventas.component.css']
})
export class GetallventasComponent implements OnInit {

	constructor(private service:GetallService) { }

	Ventas:any=[];

	ngOnInit(): void {
		this.RefreshVentas();
	}

	RefreshVentas()
	{
		this.service.getAllVentas().subscribe(data=>{
			this.Ventas=data;
		});
	}

}
