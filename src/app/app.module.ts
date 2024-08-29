import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { CategoryComponent } from './components/category/category.component';
import { transformStatusPipe } from './pipes/transform-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    FooterComponent,
    CategoryComponent,
    transformStatusPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SliderComponent,
    ProductSliderComponent,
    ProductBoxComponent,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
