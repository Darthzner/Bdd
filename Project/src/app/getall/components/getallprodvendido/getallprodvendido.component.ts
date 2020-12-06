import { Component, OnInit } from '@angular/core';
import { GetallService } from 'src/app/shared/services/getall.service';

@Component({
	selector: 'app-getallprodvendido',
	templateUrl: './getallprodvendido.component.html',
	styleUrls: ['./getallprodvendido.component.css']
})
export class GetallprodvendidoComponent implements OnInit {

	constructor(private service:GetallService) { }

	ProdVenta:any=[];

	ngOnInit(): void {
		this.RefreshGetProdVenta();
	}

	RefreshGetProdVenta()
  {
		this.service.getProdVendido().subscribe(data=>{
			this.ProdVenta=data;
		});
  }

}
