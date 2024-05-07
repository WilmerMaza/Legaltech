import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterPageComponent } from '../footer-page/footer-page.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, FooterPageComponent, RouterModule],
  template: `
    <nav class="w-100 position-absolute z-2" aria-label="Navegación principal">
      <app-navbar></app-navbar>
    </nav>
    <main role="main" class="h-100 w-100 min-vh-100 min-vw-100">
      <router-outlet></router-outlet>
    </main>
    <footer role="contentinfo">
      <app-footer-page></app-footer-page>
    </footer>
  `,
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
