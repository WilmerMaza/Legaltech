import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CarouselComponent } from 'src/app/shared/carousel/carousel.component';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner/spinner.component';
import { CarouselEmpresasImg } from './components/constant/carousel-empresas-img';
import { CarouselImg } from './components/constant/carousel-img';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { FirmaComponent } from './components/firma/firma.component';
import { IdentidadComponent } from './components/identidad/identidad.component';
import { ImgInterface } from './components/interface/ImgInterface';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ValoresComponent } from './components/valores/valores.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent,
    ServiciosComponent,
    IdentidadComponent,
    ValoresComponent,
    EmpresasComponent,
    FirmaComponent,
    SpinnerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.renderHeight();
  }
  public carouselPrincipal: Array<ImgInterface> = CarouselImg;
  public corouselEmpresas: Array<ImgInterface> = CarouselEmpresasImg;
  public carouselHeight: string = '10';

  ngOnInit(): void {
    this.renderHeight();
  }
  renderHeight(): void {
    if (typeof window !== 'undefined') {
      this.carouselHeight = `${window.innerHeight}px`;
    }
  }
}
