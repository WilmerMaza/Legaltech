import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./views/home/home.component').then((c) => c.HomeComponent),
    title: 'LegalTech',
  },
  {
    path: 'Example',
    loadComponent: () =>
      import('./views/example/example.component').then(
        (c) => c.ExampleComponent
      ),
  },
];
