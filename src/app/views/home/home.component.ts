import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { IdentidadComponent } from './components/identidad/identidad.component';
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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
