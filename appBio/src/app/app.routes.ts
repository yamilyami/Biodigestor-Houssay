
/*import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';

import { AceptarTerminosComponent } from './aceptar-terminos/aceptar-terminos.component';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component'; 

import { QuienessomosComponent } from './QuienesSomos/quienessomos/quienessomos.component';
import path from 'node:path';
/* import { FormulaRegistroComponent } from './registro/formula-registro/formula-registro.component';

//export const routes: Routes = [];*/

// app.routes.ts
import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { AceptarTerminosComponent } from './aceptar-terminos/aceptar-terminos.component';


export const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'aceptar-terminos', component: AceptarTerminosComponent },
  { path: '', redirectTo: '/registro', pathMatch: 'full' }, // Ruta por defecto
];



import { Component } from '@angular/core';
import path from 'node:path';
import { Routes } from '@angular/router';
import { Registro01Component } from './registro01/registro01/registro01.component';
import { QuienesSOmos01Component } from './QuienesSomos/quienes-somos01/quienes-somos01.component';
import { HomePageComponent } from './shared/home-page/home-page.component';


export const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "formulario", component: Registro01Component },
  { path: "registro", component: Registro01Component },
  { path: "somos", component: QuienesSOmos01Component }
];

