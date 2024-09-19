import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registro01Component } from './registro01/registro01/registro01.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Registro01Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appBio';
}
