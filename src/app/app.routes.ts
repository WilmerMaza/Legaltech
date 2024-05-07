import { Routes } from '@angular/router';
import { ExampleComponent } from './views/example/example.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'LegalTech',
  },
  {
    path: 'Example',
    component: ExampleComponent,
  },
];
