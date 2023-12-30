import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalComponent } from './local/local.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { BookLocalComponent } from './book-local/book-local.component';
import { SliderComponent } from './slider/slider.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { LocalDescriptionComponent } from './local-description/local-description.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LocalComponent, NavbarComponent,  BookLocalComponent,  SliderComponent, AboutComponent, FooterComponent, LocalDescriptionComponent, RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {
  title = "hello";
}
