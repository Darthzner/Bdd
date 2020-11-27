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
  public find: any;
  public clave: any;
  public id: any;
  constructor(private searchservice: SearchService, private cartservice: CartService) { 
    this.searchservice.getSearch()
    .subscribe( respuesta => {
      //console.log("respuesta", respuesta)
      this.searchJson = respuesta;

      //localStorage.clear()
    })
  }

  Data($e){
    //this.cartservice.addCart($e);
    if(!localStorage.getItem($e.id_producto)){
      localStorage.setItem($e.id_producto,$e.precio);
    }else{
      
    }
    
  }
  
  ngOnInit(): void {
  }

}
