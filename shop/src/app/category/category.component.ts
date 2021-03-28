import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(
    private CategoryService: CategoryService 
    ) { }

  title = "Kategori Listesi"
  categories: Category[] = []


  ngOnInit() {

    this.CategoryService.getCategories().subscribe(data=>{
      this.categories=data
    })
  }

}
