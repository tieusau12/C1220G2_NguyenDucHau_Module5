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
  result: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
    this.result = this.numberOne + this.numberTwo;
  }

  sub() {
    this.result = this.numberOne - this.numberTwo;
  }

  multi() {
    this.result = this.numberOne * this.numberTwo;
  }

  divide() {
    this.result = this.numberOne / this.numberTwo;
  }
}
