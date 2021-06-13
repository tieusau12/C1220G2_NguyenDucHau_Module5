import {Injectable} from '@angular/core';
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [{
    id: 1,
    name: 'IPhone'
  }, {
    id: 2,
    name: 'Samsung',
  }, {
    id: 3,
    name: 'LG',
  }];

  constructor() {
  }

  getAll() {
    return this.categories;
  }

  saveCategory(category: Category) {
    this.categories.push(category);
  }

  findById(id: number) {
    return this.categories.find(x => x.id === id);
  }

  updateCategory(category: Category) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === category.id) {
        this.categories[i] = category;
      }
    }
  }

  deleteCategory(id: number) {
    let category = this.findById(id);
    if (category) {
      let index = this.categories.indexOf(category);
      this.categories.splice(index, 1);
    }
  }
}
