import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GettService } from 'src/app/shared/services/gett.service';

@Component({
  selector: 'app-getpersonalpro',
  templateUrl: './getpersonalpro.component.html',
  styleUrls: ['./getpersonalpro.component.css']
})
export class GetpersonalproComponent implements OnInit {

  constructor(private service: GettService) { }

  Getpersonalpro:any=[];

  ngOnInit(): void {
  }

  getpersonalpro(f: NgForm)
	{
		var model = {fecha1:f.value.fecha1,
								fecha2:f.value.fecha2};
		this.service.get_personalpro(model).subscribe(data=>{
			this.Getpersonalpro=data;
		});
	}

}
