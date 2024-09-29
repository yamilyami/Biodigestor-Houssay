import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { Registro01Component } from './registro01/registro01/registro01.component';
import { QuienesSOmos01Component } from './QuienesSomos/quienes-somos01/quienes-somos01.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  { path: '*', component: HomePageComponent},
  {path:"homePrincipal", component:HomePageComponent },
    {path:"formularioRegistro", component:Registro01Component },
    {path:"registro", component:Registro01Component },
    {path:"QuienesSomos", component:QuienesSOmos01Component},
    {path:"ingresar", component:LoginComponent}
   

/* import { FormulaRegistroComponent } from './registro/formula-registro/formula-registro.component'; */

/*export const routes: Routes = [
  /* {path:"formulario", component:FormulaRegistroComponent} */
];
