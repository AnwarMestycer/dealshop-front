import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'dealshop-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
cols: any;
onAddToCart($event: any) {
throw new Error('Method not implemented.');
}
  category: any;
  status: any;
  products: any;
 
  constructor( private route: ActivatedRoute, private productService: ProductService){}

  ngOnInit() {
    this.route.queryParams
    .pipe(
      switchMap(params => {
        this.category = params['category'];
        console.log(this.category)
        return this.productService.loadByCategory(this.category);
      })
    )
    .subscribe(productsList => {
      this.products = productsList;
      console.log(this.products)
    });

    this.route.queryParams
    .pipe(
      switchMap(params => {
        this.status = params['status'];
        return this.productService.loadByStatus(this.status);
      })
    )
    .subscribe(products => {
      this.products = products;
    });
}
  }

