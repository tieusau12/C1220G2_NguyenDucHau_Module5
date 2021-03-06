import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title = 'Simple Calculator';
  numberOne: number = 0;
  numberTwo: number = 0;
  result: any = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
    this.result = Number(this.numberOne) + Number(this.numberTwo);
  }

  sub() {
    this.result = this.numberOne - this.numberTwo;
  }

  multi() {
    this.result = this.numberOne * this.numberTwo;
  }

  divide() {

    if (this.numberTwo == 0) {
      this.result = 'Can not delete for 0';
    } else {
      this.result = this.numberOne / this.numberTwo;
    }
  }

  setNumberOne($event: any): void {
    this.numberOne = $event.target.value;
  }

  setNumberTwo($event: any): void {
    this.numberTwo = $event.target.value;
  }
}
