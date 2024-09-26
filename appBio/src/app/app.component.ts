import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registro01Component } from './registro01/registro01/registro01.component';
import { QuienesSOmos01Component } from './quienesSomos/quienes-somos01/quienes-somos01.component';
import { NadvarComponent } from './shared/nadvar/nadvar.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from "./login/login.component";
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, Registro01Component, QuienesSOmos01Component, NadvarComponent],
  imports: [RouterOutlet, NadvarComponent, HomePageComponent, FooterComponent, LoginComponent, RestablecerContrasenaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appBio';
}
