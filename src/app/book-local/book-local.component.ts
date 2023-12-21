import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { FormInput } from '../models/formInput';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-local',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-local.component.html',
  styleUrl: './book-local.component.css'
})
export class BookLocalComponent {
  
    userInput : FormInput = {
      ref : 0,
      name :"",
      phone:"" ,
      email : "",
      numberOfPers :0 ,
      date : ""
    }
    constructor(private http: HttpClient){}
    getCurrentDate(): string {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1; // Les mois sont indexés de 0 à 11
      const day = today.getDate();
  
      const formattedMonth = month < 10 ? `0${month}` : `${month}`;
      const formattedDay = day < 10 ? `0${day}` : `${day}`;
  
      return `${year}-${formattedMonth}-${formattedDay}`;
    }
    submitData(localInfo : NgForm){
      this.http.post<FormInput>('http://localhost:3000/api/bookLocal', this.userInput).subscribe(data => {
        console.log('Updated data:', data);
        localInfo.reset();
      })
    }
    
    
}
