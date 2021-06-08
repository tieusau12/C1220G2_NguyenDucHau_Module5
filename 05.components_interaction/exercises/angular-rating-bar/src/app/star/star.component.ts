import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating: number | undefined;
  @Input() productId: number | undefined;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      productId: this.productId,
      rating: rating
    });
  }
}
