import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dealshop-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

  categories = []
  constructor(private productService: ProductService, private router: Router){}
  ngOnInit(): void {
this.productService.loadAllCategories().subscribe((items) => {
  this.categories = items
})  }

onSelectCategory(categoryName: string) {
  this.router.navigate(['/category'], {
    queryParams: { category: categoryName },
  });
}
navigateToCategory(selectedCategory: String | undefined) {
 
}

}
