import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm! : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      name:new FormControl('', [Validators.required, Validators.minLength(16)]),
      property: new FormGroup({
        year:new FormControl(''),
        stars: new FormControl('',Validators.required),
      })
    })
  }

  addBook() {
  console.log(this.bookForm.value);
  }
}
