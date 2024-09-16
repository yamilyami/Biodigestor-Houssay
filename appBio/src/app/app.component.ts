import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NadvarComponent } from './shared/nadvar/nadvar.component';
import { LoginComponent } from './login/login.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NadvarComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appBio';
}
