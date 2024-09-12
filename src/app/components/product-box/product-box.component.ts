
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
//import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'dealshop-product-box',
  templateUrl: './product-box.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class ProductBoxComponent implements OnInit {

  constructor(private router: Router){}

@Input() fullWidthMode = true;
@Input() product : any | undefined
discounted : boolean;
@Output() addToCart = new EventEmitter()

  ngOnInit(): void {
    if(this.product.discounted_price){
      this.discounted = true;
    }
  }
  onAddToCart():void{
    this.addToCart.emit(this.product)
  }
  navigateToDetails() {
    this.router.navigate(['/product-details/:id'],  {
      queryParams: { id: this.product.id },
    })
  }
}
