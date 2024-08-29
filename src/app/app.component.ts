import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { filter, take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'ds-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'dealshop-frontend';
  category: String | undefined;
  cols: any;
  newly: any = [];
  discounted: any = [];

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    /* this.productService.loadProductListService().subscribe((items) => {
      this.products = items;
      return this.products;
    });
    */
  }


  

  onAddToCart($event: any) {
    throw new Error('Method not implemented.');
  }
  products: any;
}
