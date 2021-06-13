import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderRoutingModule } from './slider-routing.module';
import { ImgSliderComponent } from './img-slider/img-slider.component';


@NgModule({
    declarations: [
        ImgSliderComponent
    ],
    exports: [
        ImgSliderComponent
    ],
    imports: [
        CommonModule,
        SliderRoutingModule
    ]
})
export class SliderModule { }
