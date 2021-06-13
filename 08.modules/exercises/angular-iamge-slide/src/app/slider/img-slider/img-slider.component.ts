import {Component, OnInit} from '@angular/core';
import {Image} from "../../image";

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  current: number = 1;
  images: Image[] = [
    {
      id: 1,
      url: '../assets/images/61198165_298820641008188_6203366225054007296_n.png'
    },
    {
      id: 2,
      url: '../assets/images/106917409_2731981373573929_8373917749355977640_o.png'
    },
    {
      id: 3,
      url: '../assets/images/118605254_1635643929938603_4062657237156348357_n.jpg'
    },
    {
      id: 4,
      url: '../assets/images/118783992_146433483792144_7775074651596471899_n.jpg'
    },
    {
      id: 5,
      url: '../assets/images/118970444_137728721367986_9052276615737877542_n.jpg'
    },
    {
      id: 6,
      url: '../assets/images/media.png'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  getPrevious() {
    if (this.current == 0) {
      this.current = this.images.length;
    } else {
      this.current -= 1;
    }
  }

  getNext() {
    if (this.current == this.images.length) {
      this.current = 0;
    } else {
      this.current += 1;
    }
  }
}
