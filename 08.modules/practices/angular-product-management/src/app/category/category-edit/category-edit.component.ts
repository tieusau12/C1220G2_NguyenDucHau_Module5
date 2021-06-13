import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  categoryForm: FormGroup;
  category: Category;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const id = +this.activatedRoute.snapshot.params.id;
    this.category = <Category>this.categoryService.findById(id);
    this.categoryForm = new FormGroup({
      id: new FormControl(this.category.id),
      name: new FormControl(this.category.name)
    })
  }

  ngOnInit(): void {
  }

  updateCategory() {
    const category = this.categoryForm.value;
    this.categoryService.updateCategory(category);
    alert("Cập nhật thành công");
    this.router.navigateByUrl('/category/list');
  }
}
