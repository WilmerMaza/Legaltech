import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { CarouselImg } from '../constant/carousel-img';
import { ImgInterface } from '../interface/ImgInterface';

register();
@Component({
  selector: 'app-carousel',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  template: `<swiper-container init="false" class="swipper-custom">
    @for (img of corouselImg; track img.src) {

    <swiper-slide lazy="true">
      <div class="content-text-swiper">
        <p [innerHTML]="sanitize(img.text)"></p>
      </div>

      <picture class="content-pictures" style="height: {{ carouselHeight }};">
        <source srcset="{{img.srcMovil}}" media="(max-width: 425px)" />

        <img [src]="img.src" [alt]="img.alt" loading="lazy" />
      </picture>
    </swiper-slide>
    }
  </swiper-container>`,
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit, AfterViewInit {
  public corouselImg: Array<ImgInterface> = CarouselImg;
  carouselHeight: string = '';
  constructor(private sanitizer: DomSanitizer) {}
  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this.carouselHeight = `${window.innerHeight}px `;
    }
  }
  swiperElement = signal<SwiperContainer | null>(null);
  ngOnInit(): void {
    this.swiperInit();
  }

  swiperInit(): void {
    if (typeof document !== 'undefined') {
      const swiperElemConstructor = document.querySelector(' swiper-container');
      const swiperOptions: SwiperOptions = {
        slidesPerView: 1,
        pagination: true,
      };
      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElement.set(swiperElemConstructor as SwiperContainer);
      this.swiperElement()?.initialize();
    }
  }
  sanitize(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
