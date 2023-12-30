import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Local } from '../models/localType';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-locals',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-locals.component.html',
  styleUrl: './list-locals.component.css'
})
export class ListLocalsComponent {
  @Input() localsList : Local[] = [];
  constructor(private router: Router){}
  navigateWithParameter(ref: number) {
    this.router.navigate(['/local', ref]);
  }
}
