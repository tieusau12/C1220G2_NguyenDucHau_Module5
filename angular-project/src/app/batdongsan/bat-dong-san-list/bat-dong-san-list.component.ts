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
  dienTichSearch: number = 0;
  giaSearch: number = 0;
  huongSearch: string = '';

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

  filter(dienTichSearch: number, giaSearch: number, huongSearch: string) {
    this.batDongSanService.batDongSanFilter(dienTichSearch, giaSearch, huongSearch).subscribe(result => {
      this.batDongSans = result;
    })
  }
}
