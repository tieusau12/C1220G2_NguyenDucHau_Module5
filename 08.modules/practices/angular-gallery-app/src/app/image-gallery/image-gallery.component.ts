import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from "./token";

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  listImage = [
    'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg',
    'https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg',
    'https://phunugioi.com/wp-content/uploads/2020/04/anh-gai-xinh-2k-de-thuong-cute.jpg',
    'https://danongonline.com.vn/wp-content/uploads/2019/12/anh-girl-xinh-cho-dien-thoai-15-e1575539438146.jpg'
  ];
  itemWidth!: number;
  config = 4;

  constructor(@Inject(GalleryConfig)
              @Optional()
                config: number) {
    if (config) {
      this.config = config;
    }
  }

  ngOnInit(): void {
    this.itemWidth = 100 / this.config;
  }

}
