import { Component, OnInit } from '@angular/core';
import { GetallService } from 'src/app/shared/services/getall.service';

@Component({
  selector: 'app-getallpersonal',
  templateUrl: './getallpersonal.component.html',
  styleUrls: ['./getallpersonal.component.css']
})
export class GetallpersonalComponent implements OnInit {

  constructor(private service:GetallService) { }

  Personal:any=[];

  ngOnInit(): void {
  	this.RefreshPersonal();
  }

  RefreshPersonal(){
  	this.service.getAllPersonal().subscribe(data=>{
  		this.Personal=data;
  	});
  }

}
