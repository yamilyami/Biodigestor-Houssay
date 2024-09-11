import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NadvarComponent } from './shared/nadvar/nadvar.component';
import { CarruselprinComponent } from './shared/carruselprin/carruselprin.component';
import { FormulaRegistroComponent } from './registro/formula-registro/formula-registro.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NadvarComponent, CarruselprinComponent, FormulaRegistroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appBio';
}
