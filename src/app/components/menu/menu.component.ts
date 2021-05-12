import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  user = false
  navbarColor = false

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getNavbarChange()
  }

  getNavbarChange(){
    console.log("Estoy entrando");

    if(this.user === true){
      this.navbarColor = true
      console.log("True bro");
      return this.navbarColor
    }else{
      this.navbarColor = false
      console.log("Que ise loco soy false");
      return this.navbarColor
    }
  }
}
