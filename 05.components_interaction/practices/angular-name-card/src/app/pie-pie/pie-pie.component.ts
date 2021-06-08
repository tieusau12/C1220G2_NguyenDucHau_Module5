import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-pie',
  templateUrl: './pie-pie.component.html',
  styleUrls: ['./pie-pie.component.css']
})
export class PiePieComponent implements OnInit {
  birthday = new Date(1998,3,8);
  constructor() { }

  ngOnInit(): void {
  }

}
