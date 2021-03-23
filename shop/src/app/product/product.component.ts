import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title="Ürün Listesi";
  products : any []=[
    {id:1,name:"Laptop",price:2500,categoty:1,description:"Asus ZenBook"},
    {id:2,name:"Laptop",price:25,categoty:2,description:"A4 Tech"}

  ]

  ngOnInit(): void {
  }

}
