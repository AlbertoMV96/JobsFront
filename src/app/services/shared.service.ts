import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  user = false
  navbarColor = false

  jobOffers = [
    {"photo": "../../../assets/images/shopifyImage.jpg", "name": "Diseñador Gráfico", "companyName": "Shopify", "location": "Madrid, España", "type": "Tiempo completo", "created": "hace 7 días", "b": true, "g": false, "p": false, "o": false, "r": false},
    {"photo": "../../../assets/images/shopifyImage.jpg", "name": "Product Manager", "companyName": "IskayPet", "location": "Full Remoto", "type": "Freelancer", "created": "hace 2 días", "b": false, "g": true, "p": false, "o": false, "r": false},
    {"photo": "../../../assets/images/shopifyImage.jpg", "name": "Frontend Developer", "companyName": "Agencia Glowe", "location": "Barcelona, España", "type": "Tiempo parcial", "created": "12/02/21", "b": false, "g": false, "p": true, "o": false, "r": false},
    {"photo": "../../../assets/images/shopifyImage.jpg", "name": "Diseñador Gráfico", "companyName": "AliExpress", "location": "Pozuelo de Alcorcón, España", "type": "Prácticas", "created": "23/02/21", "b": false, "g": false, "p": false, "o": true, "r": false},
    {"photo": "../../../assets/images/shopifyImage.jpg", "name": "Programador Symfony", "companyName": "Shopify", "location": "Madrid, España", "type": "Proyecto", "created": "hace 7 días", "b": false, "g": false, "p": false, "o": false, "r": true},
  ]

  getUsername(){
    return localStorage.getItem('username')!!
  }
  getJobOffers(){
    return this.jobOffers
  }
  getNavbarChange(){
    if(this.user === true){
      this.navbarColor = true
      return this.navbarColor
    }else{
      this.navbarColor = false
      return this.navbarColor
    }
  }
}
