import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SearchService } from '../../services/search.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchJson: any;
  public product_item: any;
  public product_list: any[] = [];
  constructor(private searchservice: SearchService, private cartservice: CartService) { 
    this.searchservice.getSearch()
    .subscribe( respuesta => {
      this.searchJson = respuesta;
      for(let i =0; i<this.searchJson.length; i++){
        this.product_list.push(0);
      }
    })
  }

  Data($e,x:number){
    if(!localStorage.getItem($e.nombre)){
      const obj = $e;
      obj.cantidad = x
      this.product_item = JSON.stringify(obj);
      localStorage.setItem($e.nombre,this.product_item);
    }else{
      let value =JSON.parse(localStorage.getItem($e.nombre))
      value.cantidad = value.cantidad + x
      this.product_item = JSON.stringify(value);
      localStorage.setItem($e.nombre,this.product_item);
    }
    
  }
  
  handleMinus(index:number) {
    if(this.product_list[index]>0){
      this.product_list[index]--;
    }
  }
  handlePlus(index:number) {
    this.product_list[index]++; 
  }

  ngOnInit(): void {
    
  }

}
