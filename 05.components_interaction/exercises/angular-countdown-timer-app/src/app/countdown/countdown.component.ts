import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @Input()
  countTime: number = 0;
  timeReset: number = this.countTime;
  @Output()
  intervalId: number = 0;
  message: string = '';

  constructor() {
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  ngOnInit(): void {
    this.reset();
  }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at Time ${this.countTime} seconds`;
  }

  reset() {
    this.clearTimer();
    this.countTime=this.timeReset;
    this.message = 'Click start button if you want to start Countdown ';
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
        this.countTime -= 1;
        if (this.countTime == 0) {
          this.message = "Blast off!";
          this.clearTimer();
        } else {
          this.message = `Time -${this.countTime} seconds and counting`;
        }
      }, 1000
    );
  }
}

