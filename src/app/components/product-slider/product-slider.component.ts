import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductBoxComponent } from '../product-box/product-box.component';
import { Router } from '@angular/router';

@Component({
  selector: 'dealshop-product-slider',
  standalone: true,
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, ProductBoxComponent],
})
export class ProductSliderComponent implements OnInit {
  status = [
    { name: 'Tendance', val: 'trend' },
    { name: 'Nouveauté', val: 'new' },
    { name: 'Article slodés', val: 'discount' },
  ];

  cols: any;
  trending: any = [];
  newly: any;
  discounted: any;
  onAddToCart($event: Event) {
    throw new Error('Method not implemented.');
  }
  constructor(private productService: ProductService, private router: Router) {}
  ngOnInit(): void {
    this.loadTrendingPorduct();
    this.loadNewProuducts();
    this.loadDiscountedPorduct();
  }

  loadTrendingPorduct() {
    this.productService
      .loadByStatus('trend')
      .pipe()
      .subscribe((items) => {
        this.trending = items;
        return this.trending;
      });
  }

  loadNewProuducts() {
    this.productService.loadByStatus('new').subscribe((items) => {
      this.newly = items;
      return this.newly;
    });
  }

  loadDiscountedPorduct() {
    this.productService.loadByStatus('discount').subscribe((items) => {
      this.discounted = items;
      return this.discounted;
    });
  }
  showMore(statusName: string) {
    this.router.navigate(['/category'], {
      queryParams: { status: statusName },
    });
  }
}
