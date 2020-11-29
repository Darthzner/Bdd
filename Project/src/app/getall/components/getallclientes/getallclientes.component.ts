import { Component, OnInit } from '@angular/core';
import { GetallService } from 'src/app/shared/services/getall.service';

@Component({
  selector: 'app-getallclientes',
  templateUrl: './getallclientes.component.html',
  styleUrls: ['./getallclientes.component.css']
})
export class GetallclientesComponent implements OnInit {

  constructor(private service:GetallService) { }

  Clientes:any=[];

  ngOnInit(): void {
    this.RefreshClients();
  }

  RefreshClients(){
  	this.service.getAllClientes().subscribe(data=>{
  		this.Clientes=data;
  	});
  }
}
