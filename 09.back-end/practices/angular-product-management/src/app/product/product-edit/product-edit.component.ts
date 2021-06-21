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
  productForm!: FormGroup;
  id: number = 0;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
    // this.id = +this.activatedRoute.snapshot.params.id;
    // this.productService.findById(this.id).subscribe(product => {
    //   this.productForm = new FormGroup({
    //     id: new FormControl(product.id),
    //     name: new FormControl(product.name),
    //     price: new FormControl(product.price),
    //     description: new FormControl(product.description)
    //   });
    // });

  }

  ngOnInit() {
  }

  // updateProduct(id: number) {
  //   const product = this.productForm.value;
  //   this.productService.updateProduct(id, product).subscribe(() => {
  //     this.router.navigateByUrl('/product/list');
  //   });
  // }
}
