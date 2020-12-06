import { Component, OnInit } from '@angular/core';
import { GetallService } from 'src/app/shared/services/getall.service';

@Component({
  selector: 'app-getallstock',
  templateUrl: './getallstock.component.html',
  styleUrls: ['./getallstock.component.css']
})
export class GetallstockComponent implements OnInit {

  constructor(private service:GetallService) { }

  Stock:any=[];

  ngOnInit(): void {
		this.RefreshGetStock();
  }

  RefreshGetStock()
  {
		this.service.getStock().subscribe(data=>{
			this.Stock=data;
		});
  }

}
