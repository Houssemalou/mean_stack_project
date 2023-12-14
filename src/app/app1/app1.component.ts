import { Component, ElementRef, ViewChild, Renderer2, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LocalComponent } from '../local/local.component';
import { AboutComponent } from '../about/about.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-app1',
  standalone: true,
  imports: [CommonModule, SliderComponent, NavbarComponent, LocalComponent, AboutComponent, FooterComponent],
  templateUrl: './app1.component.html',
  styleUrl: './app1.component.css'
})
export class App1Component  {
  
  @ViewChild('btn',{static : true}) btn!:ElementRef;
  aria : boolean = false;
  renderer!: Renderer2;
  constructor( renderer: Renderer2) {
    this.renderer = renderer ;
  }
  toggle(): void {
    this.renderer.setAttribute(this.btn.nativeElement, 'aria-expanded', "true");
    
  }
  
  
}
