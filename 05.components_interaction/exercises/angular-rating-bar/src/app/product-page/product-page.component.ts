import {Component, OnInit} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  public products: Product[] = [];
  title = 'Products';
  productToUpdate: any;
  ratingClicked: number = 0;
  productIdRatingClicked: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.products = this.getProducts();
  }

  getProducts() {
    return [
      {'id': 1, 'title': 'Screw Driver', 'price': 400, 'rating': 3, 'stock': 11},
      {'id': 2, 'title': 'Nut Bolt', 'price': 200, 'rating': 2, 'stock': 5},
      {'id': 3, 'title': 'Resistor', 'price': 78, 'rating': 4, 'stock': 45},
      {'id': 4, 'title': 'Tractor', 'price': 20000, 'rating': 5, 'stock': 1},
      {'id': 5, 'title': 'Roller', 'price': 62, 'rating': 1, 'stock': 15},
      {'id': 6, 'title': 'Platen', 'price': 78, 'rating': 1, 'stock': 15},
    ];
  }

  changeStockValue(p: any) {
    this.productToUpdate = this.products.find(x => x.id === p.id);
    this.productToUpdate.stock = this.productToUpdate.stock + p.updatedStockValue;
  }

  ratingStarClick(clickObj: any): void {
    const product = this.products.find(((i: any) => i.id === clickObj.productId));
    if (product) {
      product.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.productIdRatingClicked = product.title;
    }
  }
}
