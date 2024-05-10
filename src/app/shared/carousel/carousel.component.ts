import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
  signal,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ImgInterface } from 'src/app/views/home/components/interface/ImgInterface';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

register();

@Component({
  selector: 'app-carousel',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  template: `<swiper-container init="false" class="swipper-custom">
    @for (img of imagesCarousel; track img.src) {
    <swiper-slide lazy="true">
      @if (textPresent) {
      <div class="content-text-swiper">
        <p [innerHTML]="img.text"></p>
      </div>
      }
      <picture class="content-pictures" style="height:{{heightCorousel}} ;" >
        <source srcset="{{img.srcMovil}}" media="(max-width: 425px)" />
        <source srcset="{{img.src}}" media="(min-width: 600px)" />
        <img
          [src]="img.src"
          [alt]="img.alt"
          loading="lazy"
          role="presentation"
          [title]="img.title"
          height="100%"
          width="100%"
        />
      </picture>
    </swiper-slide>
    }
  </swiper-container>`,
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  @Input() imagesCarousel: Array<ImgInterface> = [];
  @Input() textPresent: boolean = false;
  @Input() navigation: boolean = false;
  @Input() pagination: boolean = false;
  @Input() paginationClick: boolean = false;
  @Input() slidesPerView: number = 1;
  @Input() autoplayTime: number = 5600;
  @Input() loop: boolean = false;
  @Input() freeMode: boolean = false;
  @Input() spacebetween: number = 0;
  @Input() heightCorousel: string = '';
  
  private swiperElement = signal<SwiperContainer | null>(null);
  
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.swiperInit();
  }
  swiperInit(): void {
    if (typeof document !== 'undefined') {
      const swiperElemConstructor = document.querySelector(' swiper-container');
      const swiperOptions: SwiperOptions = {
        slidesPerView: this.slidesPerView,
        pagination: {
          enabled: this.pagination,
          clickable: this.paginationClick,
        },
        navigation: { enabled: this.navigation },
        autoplay: { delay: this.autoplayTime },
        loop: this.loop,
        freeMode: this.freeMode,
        spaceBetween: this.spacebetween,
      };
      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElement.set(swiperElemConstructor as SwiperContainer);
       this.swiperElement()?.initialize();
    }
  }
  sanitize(html: string | undefined): SafeHtml {
    return html ? this.sanitizer.bypassSecurityTrustHtml(html) : false;
  }
}
