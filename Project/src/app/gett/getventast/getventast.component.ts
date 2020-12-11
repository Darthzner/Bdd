import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GettService } from 'src/app/shared/services/gett.service';

@Component({
	selector: 'app-getventast',
	templateUrl: './getventast.component.html',
	styleUrls: ['./getventast.component.css']
})
export class GetventastComponent implements OnInit {

	constructor(private service: GettService) { }

	Getventas:any=[];

	ngOnInit(): void {
	}

	getventas(f: NgForm)
	{
		var model = {fecha1:f.value.fecha1,
								fecha2:f.value.fecha2};
		this.service.get_ventast(model).subscribe(data=>{
			this.Getventas=data;
		});
	}

}
