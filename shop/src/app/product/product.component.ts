import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService, private http:HttpClient) { }
  title="Ürün Listesi";
  filterText="";
  products : Product []=[];
  path ="  http://localhost:3000/products";



  ngOnInit(): void {   //Bu componentimiz yüklendiği zaman yani component ilk kez açıldığı zaman çalışır.
  
      this.http.get<Product[]>(this.path).subscribe(data=>{
          this.products=data

      });//o adresteki datayı istiyorum.
  }


  addToCart(product: { name: string; }){
    this.alertifyService.success(product.name + " Added");
  }
}
