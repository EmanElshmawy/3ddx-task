import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts()
  }

  // to get produects
  getProducts() {
    this.activeRoute.data.subscribe(
      (data: any) => {
        this.products = data['productsResolver']
      }
    )
  }
}
