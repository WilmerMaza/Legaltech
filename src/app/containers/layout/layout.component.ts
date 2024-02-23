import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterPageComponent } from '../footer-page/footer-page.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, FooterPageComponent, RouterModule],
  template: `
    <section>
      <nav>
        <app-navbar />
      </nav>

      <main class="container-fluid h-100 w-100 min-vh-100 min-vw-100">
        <router-outlet />
      </main>

      <footer>
        <app-footer-page />
      </footer>
    </section>
  `,
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
