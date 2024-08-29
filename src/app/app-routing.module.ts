import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: ProductSliderComponent
  },
  {
    path: 'category',
    component:  CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
