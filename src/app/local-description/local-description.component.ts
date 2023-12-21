import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-local-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './local-description.component.html',
  styleUrl: './local-description.component.css'
})
export class LocalDescriptionComponent {
  test : string = "none";

  rate() : void{
      this.test = "currentColor";
  }

}
