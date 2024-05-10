import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CarouselEmpresasImg } from '../constant/carousel-empresas-img';
import { ImgInterface } from '../interface/ImgInterface';


@Component({
  selector: 'app-empresas',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  template: `<swiper-container
    class="swipper-empresa-custom"
    navigation="true"
    slides-per-view="3"
    space-between="1"
    free-mode="true"
    centered-slides="true"
    autoplay-delay="2500"
    autoplay-disable-on-interaction="false"
  >
    @for (img of corouselImg ; track img.src) {

    <swiper-slide lazy="true" class="swiper-slide">
      <picture class="content-pictures">
        <source srcset="{{img.srcMovil}}" />

        <img [src]="img.srcMovil" [alt]="img.alt" loading="lazy" />
      </picture>
    </swiper-slide>
    }
  </swiper-container>`,
  styleUrl: './empresas.component.scss',
})
export class EmpresasComponent {
  public corouselImg: Array<ImgInterface> = CarouselEmpresasImg;

  constructor() {}

  ngOnInit(): void {}
}
