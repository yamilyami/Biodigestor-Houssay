import { Routes } from '@angular/router';
import { QuienessomosComponent } from './QuienesSomos/quienessomos/quienessomos.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "quienes-somos", component: QuienessomosComponent },
  { path: "registrarse", component: RegistroComponent }
];
