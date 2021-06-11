import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  product: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
    const
      id = +this.activatedRoute.snapshot.params.id;
    this
      .product = <Product>this.productService.findById(id);
    this
      .productForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description)
    });
  }

  ngOnInit() {
  }

  updateProduct() {
    const product = this.productForm.value;
    this.productService.updateProduct(product);
    alert('Cập nhật thành công');
    this.router.navigateByUrl('/product/list');
  }
}
