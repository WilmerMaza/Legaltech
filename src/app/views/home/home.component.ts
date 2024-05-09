import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { IdentidadComponent } from './components/identidad/identidad.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ValoresComponent } from './components/valores/valores.component';
import { FirmaComponent } from './components/firma/firma.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent,
    ServiciosComponent,
    IdentidadComponent,
    ValoresComponent,
    FirmaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
