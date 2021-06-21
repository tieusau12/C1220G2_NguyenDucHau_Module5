import {Component, OnInit} from '@angular/core';
import {BatDongSan} from "../../model/bat-dong-san";
import {BatDongSanService} from "../../service/bat-dong-san.service";

@Component({
  selector: 'app-bat-dong-san',
  templateUrl: './bat-dong-san-list.component.html',
  styleUrls: ['./bat-dong-san-list.component.css']
})
export class BatDongSanListComponent implements OnInit {
  batDongSans: BatDongSan[] = [];
  areaSearch: number = 0;
  priceSearch: number = 0;
  directionSearch: string = '';

  constructor(private batDongSanService: BatDongSanService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.batDongSanService.getAll().subscribe(batdongsans => {
      this.batDongSans = batdongsans;
    })
  }

  filter(areaSearch: number, priceSearch: number, directionSearch: string) {
    this.batDongSanService.batDongSanFilter(areaSearch, priceSearch, directionSearch).subscribe(result => {
      this.batDongSans = result;
    })
  }
}
