import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GettService } from 'src/app/shared/services/gett.service';

@Component({
	selector: 'app-getingresost',
	templateUrl: './getingresost.component.html',
	styleUrls: ['./getingresost.component.css']
})
export class GetingresostComponent implements OnInit {

	constructor(private service: GettService) { }

	Getingresos:any=[];

	ngOnInit(): void {
	}

	getingresos(f: NgForm)
	{
		var model = {fecha1:f.value.fecha1,
								fecha2:f.value.fecha2};
		this.service.get_ingresost(model).subscribe(data=>{
			this.Getingresos=data;
		});
	}

}
