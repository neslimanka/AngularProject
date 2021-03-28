import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService,private productService:ProductService ) { }
  title="Ürün Listesi";
  filterText="";
  products : Product []=[];
  



  ngOnInit(): void {   //Bu componentimiz yüklendiği zaman yani component ilk kez açıldığı zaman çalışır.
   this.productService.getProducts().subscribe(data=>{
     this.products=data
   });
     
  }


  addToCart(product: { name: string; }){
    this.alertifyService.success(product.name + " Added");
  }
}
