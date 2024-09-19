import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'dealshop-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  id: number;
quantity: number = 0;
  constructor(private route: ActivatedRoute, private productService: ProductService) {}
  ngOnInit(): void {
 

  this.route.queryParams
    .pipe(
      switchMap(params => {
        this.id = params['id'];
        console.log(this.id)
        return this.productService.loadById(this.id);
      })
    )
    .subscribe(productsList => {
      this.product = productsList;
      console.log(this.product)
    });
  }
}
