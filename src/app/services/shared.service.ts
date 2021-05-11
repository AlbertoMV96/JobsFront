import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  jobOffers = [
    {"photo": "../../../assets/images/shopifyImage.jpg", "title": "Diseñador Gráfico", "bussiness": "Shopify", "location": "Madrid, España", "time": "Tiempo completo", "created": "hace 7 días", "b": true, "g": false, "p": false, "o": false, "r": false},
    {"photo": "../../../assets/images/shopifyImage.jpg", "title": "Product Manager", "bussiness": "IskayPet", "location": "Full Remoto", "time": "Freelancer", "created": "hace 2 días", "b": false, "g": true, "p": false, "o": false, "r": false},
    {"photo": "../../../assets/images/shopifyImage.jpg", "title": "Frontend Developer", "bussiness": "Agencia Glowe", "location": "Barcelona, España", "time": "Tiempo parcial", "created": "12/02/21", "b": false, "g": false, "p": true, "o": false, "r": false},
    {"photo": "../../../assets/images/shopifyImage.jpg", "title": "Diseñador Gráfico", "bussiness": "AliExpress", "location": "Pozuelo de Alcorcón, España", "time": "Prácticas", "created": "23/02/21", "b": false, "g": false, "p": false, "o": true, "r": false},
    {"photo": "../../../assets/images/shopifyImage.jpg", "title": "Programador Symfony", "bussiness": "Shopify", "location": "Madrid, España", "time": "Proyecto", "created": "hace 7 días", "b": false, "g": false, "p": false, "o": false, "r": true},
  ]
  constructor() { }

  getJobOffers(){
    return this.jobOffers
  }
}
