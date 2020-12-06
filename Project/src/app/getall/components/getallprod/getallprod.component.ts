import { Component, OnInit } from '@angular/core';
import { GetallService } from 'src/app/shared/services/getall.service';

@Component({
	selector: 'app-getallprod',
	templateUrl: './getallprod.component.html',
	styleUrls: ['./getallprod.component.css']
})
export class GetallprodComponent implements OnInit {

	constructor(private service:GetallService) { }

	Productos:any=[];

	ngOnInit(): void {
		this.RefreshProd();
	}

	RefreshProd()
	{
		this.service.getAllProd().subscribe(data=>{
			this.Productos=data;
		});
	}

}
