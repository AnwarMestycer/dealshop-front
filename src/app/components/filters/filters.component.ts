import { Component } from '@angular/core';

@Component({
  selector: 'dealshop-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
selectedProductCategories= [];
selectedColors = [];
  selectedPriceRanges = [];
  onCheckboxChange(event: any, category: string | null, color: any, priceRange: any) {
    if (event.target.checked) {
      if (category) {
        this.selectedProductCategories.push(category);
      } else if (color) {
        this.selectedColors.push(color);
      } else if (priceRange) {
        this.selectedPriceRanges.push(priceRange);
      }
    } else {
      if (category) {
        this.selectedProductCategories = this.selectedProductCategories.filter(c => c !== category);
      } else if (color) {
        this.selectedColors = this.selectedColors.filter(c => c !== color);
      } else if (priceRange) {
        this.selectedPriceRanges = this.selectedPriceRanges.filter(c => c !== priceRange);
      }
    }
    console.log(this.selectedProductCategories)
    console.log(this.selectedColors)
    console.log(this.selectedPriceRanges)


  }
reset() {
  this.selectedProductCategories = [];
  this.selectedColors = [];
  this.selectedPriceRanges = [];}

}
