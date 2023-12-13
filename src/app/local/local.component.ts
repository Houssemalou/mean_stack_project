import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Local } from '../models/localType';
import { ListLocalsComponent } from '../list-locals/list-locals.component';

@Component({
  selector: 'app-local',
  standalone: true,
  imports: [CommonModule, ListLocalsComponent],
  templateUrl: './local.component.html',
  styleUrl: './local.component.css'
})
export class LocalComponent {
  locals : Local[] = [
    {surface : 300,
    nb_chambre: 5,
    cat : "villa" ,
    lieu : "Aryena" ,
    prix_mois : 750 ,
    disponibilité : true ,
    urlList :["../../assets/images/maison/maison1.jpg","../../assets/images/chambre/chambre1.jpg","../../assets/images/cuisine/cuisine.jpg"] },
    {surface : 450,
      nb_chambre: 3,
      cat : "local commercial",
      lieu : "charguia 1",
      prix_mois : 1200,
      disponibilité : true,
      urlList :["../../assets/images/commerce/commerce1.jpg","../../assets/images/commerce/commerce2.jpg","../../assets/images/commerce/commerce1.jpg"]},
    {surface : 150,
      nb_chambre: 2 ,
      cat : "appartement",
      lieu : "El Aouina" ,
      prix_mois : 750 ,
      disponibilité : false,
      urlList : ["../../assets/images/maison/maison4.jpg","../../assets/images/cuisine/cuisine3.jpg","../../assets/images/cuisine/cuisine2.jpg"]},
      {surface : 300,
        nb_chambre: 5,
        cat : "villa" ,
        lieu : "Aryena" ,
        prix_mois : 750 ,
        disponibilité : true ,
        urlList :["../../assets/images/maison/maison1.jpg","../../assets/images/chambre/chambre1.jpg","../../assets/images/cuisine/cuisine.jpg"] },
        {surface : 450,
        nb_chambre: 3,
        cat : "local commercial",
        lieu : "charguia 1",
        prix_mois : 1200,
        disponibilité : true,
        urlList :["../../assets/images/commerce/commerce1.jpg","../../assets/images/commerce/commerce2.jpg","../../assets/images/commerce/commerce1.jpg"]},
        {surface : 450,
          nb_chambre: 3,
          cat : "local commercial",
          lieu : "charguia 1",
          prix_mois : 1200,
          disponibilité : true,
          urlList :["../../assets/images/commerce/commerce1.jpg","../../assets/images/commerce/commerce2.jpg","../../assets/images/commerce/commerce1.jpg"]},
        {surface : 450,
            nb_chambre: 3,
            cat : "local commercial",
            lieu : "charguia 1",
            prix_mois : 1200,
            disponibilité : true,
            urlList :["../../assets/images/commerce/commerce1.jpg","../../assets/images/commerce/commerce2.jpg","../../assets/images/commerce/commerce1.jpg"]},
            {surface : 450,
              nb_chambre: 3,
              cat : "local commercial",
              lieu : "charguia 1",
              prix_mois : 1200,
              disponibilité : true,
              urlList :["../../assets/images/commerce/commerce1.jpg","../../assets/images/commerce/commerce2.jpg","../../assets/images/commerce/commerce1.jpg"]} 
      ];
      otherLocals : Local[] = [...this.locals];
  constructor(){}
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
