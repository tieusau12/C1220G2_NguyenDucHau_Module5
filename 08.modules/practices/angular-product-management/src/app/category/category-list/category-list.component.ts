import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoriesService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.categories = this.categoriesService.getAll();
  }

  deleteCategory(id: number) {
    this.categoriesService.deleteCategory(id);
  }
}
