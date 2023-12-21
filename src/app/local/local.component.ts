import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Local } from '../models/localType';
import { ListLocalsComponent } from '../list-locals/list-locals.component';
import { ListLocalsService } from './services/list-locals.service';

@Component({
  selector: 'app-local',
  standalone: true,
  imports: [CommonModule,ListLocalsComponent ],
  templateUrl: './local.component.html',
  styleUrl: './local.component.css'
})
export class LocalComponent implements OnInit  {
  locals! : Local[] ;
  otherLocals! : Local[] ;
  
  constructor(private listLocal : ListLocalsService){}
  ngOnInit(){
    this.listLocal.getListLocals().subscribe( list => this.locals = list);
    this.otherLocals = [...this.locals];
    console.log(this.otherLocals);
  }
  
 
  
  getAllLocals() : void {
     this.otherLocals = [...this.locals]
  }
  getAppartements() : void {
     this.otherLocals = this.locals.filter(local => local.cat=="appartement")
  }
  getCommercialLocal() : void {
    this.otherLocals = this.locals.filter(local => local.cat=="local commercial")
 }
 getVillas() : void {
  this.otherLocals = this.locals.filter(local => local.cat=="villa")
}

}
