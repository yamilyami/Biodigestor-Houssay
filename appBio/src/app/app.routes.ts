import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { Registro01Component } from './registro01/registro01/registro01.component';

export const routes: Routes = [
    {path:"formulario", component:Registro01Component }

];
