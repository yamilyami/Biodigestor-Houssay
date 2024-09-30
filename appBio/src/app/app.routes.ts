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
