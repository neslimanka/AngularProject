import { Component, OnInit } from '@angular/core';
import { Product } from './product';
declare let alertify:any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title="Ürün Listesi";
  filterText="";
  products : Product []=[
    {id:1,name:"Laptop",price:2500,categoryId:1,description:"Asus ZenBook",imageUrl:"https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
    {id:2,name:"Mause",price:25,categoryId:2,description:"A4 Tech",imageUrl:"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
    {id:1,name:"Laptop",price:2500,categoryId:1,description:"Asus ZenBook",imageUrl:"https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
    {id:1,name:"Mause",price:2500,categoryId:1,description:"Asus ZenBook",imageUrl:"https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
    {id:1,name:"Mause",price:2500,categoryId:1,description:"Asus ZenBook",imageUrl:"https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
    {id:1,name:"Mause",price:2500,categoryId:1,description:"Asus ZenBook",imageUrl:"https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
    {id:1,name:"Mause",price:2500,categoryId:1,description:"Asus ZenBook",imageUrl:"https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
   

  ]

  ngOnInit(): void {
  }


  addToCart(product: { name: string; }){
    alertify.success(product.name + " Sepete Eklendi");
  }
}
