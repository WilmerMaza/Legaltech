import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
// In your component.ts file

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
