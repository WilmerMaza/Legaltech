import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, ServiciosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
