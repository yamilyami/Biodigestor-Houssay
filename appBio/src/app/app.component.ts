import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NadvarComponent } from './shared/nadvar/nadvar.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NadvarComponent, HomePageComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appBio';
}
