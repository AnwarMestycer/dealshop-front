
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'dealshop-product-box',
  templateUrl: './product-box.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class ProductBoxComponent implements OnInit {
@Input() fullWidthMode = true;
@Input() product : any | undefined
@Input() discounted : boolean = false;
@Output() addToCart = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onAddToCart():void{
    this.addToCart.emit(this.product)
  }
}
