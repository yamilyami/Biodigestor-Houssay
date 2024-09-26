import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registro01Component } from './registro01/registro01/registro01.component';
import { QuienesSOmos01Component } from './quienesSomos/quienes-somos01/quienes-somos01.component';
import { NadvarComponent } from './shared/nadvar/nadvar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Registro01Component, QuienesSOmos01Component, NadvarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appBio';
}
