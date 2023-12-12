import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Local } from '../models/localType';

@Component({
  selector: 'app-list-locals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-locals.component.html',
  styleUrl: './list-locals.component.css'
})
export class ListLocalsComponent {
  @Input() localsList : Local[] = [];
}
