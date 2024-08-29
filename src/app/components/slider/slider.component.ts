import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'dealshop-slider',
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class SliderComponent implements OnInit {
  ngOnInit(): void {
  }

}
