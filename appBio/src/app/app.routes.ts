import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { Registro01Component } from './registro01/registro01/registro01.component';
import { QuienesSOmos01Component } from './quienesSomos/quienes-somos01/quienes-somos01.component';

export const routes: Routes = [
    {path:"formulario", component:Registro01Component },
    {path:"registro", component:Registro01Component },
    {path:"Somos", component:QuienesSOmos01Component }

/* import { FormulaRegistroComponent } from './registro/formula-registro/formula-registro.component'; */

export const routes: Routes = [
  /* {path:"formulario", component:FormulaRegistroComponent} */
];
