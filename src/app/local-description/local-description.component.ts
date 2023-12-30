import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Local } from '../models/localType';
import { DataService } from './services/data-service.service';

@Component({
  selector: 'app-local-description',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './local-description.component.html',
  styleUrl: './local-description.component.css'
})
export class LocalDescriptionComponent {
  @Input() ref : string = '';
  data!: Local; 
  
  constructor( private dataService: DataService) {}

  ngOnInit(): void {
   
    
      this.dataService.getData(this.ref).subscribe(
        (result) => {
          this.data = result;
        })
    };

}
