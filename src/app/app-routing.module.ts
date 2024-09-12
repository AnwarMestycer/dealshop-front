import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProductSliderComponent
  },
  {
    path: 'category',
    component:  CategoryComponent
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
