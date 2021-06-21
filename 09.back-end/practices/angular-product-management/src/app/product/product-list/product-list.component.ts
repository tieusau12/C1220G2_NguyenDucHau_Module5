import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  nameSearch: string = '';
  priceSearch: number = 0;

  constructor(private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.productService.getSearchAfter(this.nameSearch, this.priceSearch).subscribe(products => {
      this.products = products;
    })
  }

  delete(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.getAll();
    });
  }
}
