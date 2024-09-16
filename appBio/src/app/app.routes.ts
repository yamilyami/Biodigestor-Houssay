import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FormulaRegistroComponent } from './registro/formula-registro/formula-registro.component';
import { QuienessomosComponent } from './QuienesSomos/quienessomos/quienessomos.component';


export const routes: Routes = [
    {path:"formulario", component:FormulaRegistroComponent},
    {path:"Quienes-Somos",component:QuienessomosComponent}
];
