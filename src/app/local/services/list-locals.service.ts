import { Injectable } from '@angular/core';
import { Local } from '../../models/localType';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // means that this service is automatically add to array providers (appModule) 
}) // we can instansiate this service only one time
export class ListLocalsService {
  /*listLocals: Local[] =[
    {
      ref :1000,
      surface: 300,
      nb_chambre: 5,
      cat: "villa",
      lieu: "Aryena",
      prix_mois: 750,
      disponibilité: true,
      urlList: ["../../assets/images/maison/maison1.jpg", "../../assets/images/chambre/chambre1.jpg", "../../assets/images/cuisine/cuisine.jpg"]
    },
    {
      ref:1001,
      surface: 450,
      nb_chambre: 3,
      cat: "local commercial",
      lieu: "charguia 1",
      prix_mois: 1200,
      disponibilité: true,
      urlList: ["../../assets/images/commerce/commerce1.jpg", "../../assets/images/commerce/commerce2.jpg", "../../assets/images/commerce/commerce1.jpg"]
    },
    {
      ref:1002,
      surface: 150,
      nb_chambre: 2,
      cat: "appartement",
      lieu: "El Aouina",
      prix_mois: 750,
      disponibilité: false,
      urlList: ["../../assets/images/maison/maison4.jpg", "../../assets/images/cuisine/cuisine3.jpg", "../../assets/images/cuisine/cuisine2.jpg"]
    },
    {
      ref:1003,
      surface: 300,
      nb_chambre: 5,
      cat: "villa",
      lieu: "Aryena",
      prix_mois: 750,
      disponibilité: true,
      urlList: ["../../assets/images/maison/maison1.jpg", "../../assets/images/chambre/chambre1.jpg", "../../assets/images/cuisine/cuisine.jpg"]
    },
    {
      ref:1004,
      surface: 450,
      nb_chambre: 3,
      cat: "local commercial",
      lieu: "charguia 1",
      prix_mois: 1200,
      disponibilité: true,
      urlList: ["../../assets/images/commerce/commerce1.jpg", "../../assets/images/commerce/commerce2.jpg", "../../assets/images/commerce/commerce1.jpg"]
    },
    {
      ref :1005,
      surface: 450,
      nb_chambre: 3,
      cat: "local commercial",
      lieu: "charguia 1",
      prix_mois: 1200,
      disponibilité: true,
      urlList: ["../../assets/images/commerce/commerce1.jpg", "../../assets/images/commerce/commerce2.jpg", "../../assets/images/commerce/commerce1.jpg"]
    },
    {
      ref :1006,
      surface: 450,
      nb_chambre: 3,
      cat: "local commercial",
      lieu: "charguia 1",
      prix_mois: 1200,
      disponibilité: true,
      urlList: ["../../assets/images/commerce/commerce1.jpg", "../../assets/images/commerce/commerce2.jpg", "../../assets/images/commerce/commerce1.jpg"]
    },
    {
      ref :1007,
      surface: 450,
      nb_chambre: 3,
      cat: "local commercial",
      lieu: "charguia 1",
      prix_mois: 1200,
      disponibilité: true,
      urlList: ["../../assets/images/commerce/commerce1.jpg", "../../assets/images/commerce/commerce2.jpg", "../../assets/images/commerce/commerce1.jpg"]
    }
  ]  ;*/
  constructor(private http : HttpClient) {
  }
   getListLocals() {
    return  this.http.get<Local[]>('/api/locals');
  }
}
