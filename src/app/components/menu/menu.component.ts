import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() userName: any = {};

  user = false
  navbarColor = false
  showUser = false
  showLogin = true
  constructor(private sharedService: SharedService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.authService.isAuthenticated()) {
          this.userName = this.sharedService.getUsername()
          this.user = true
          this.getNavbarChange()
        }
      }
    })
  }

  getNavbarChange() {
    console.log("Estoy entrando");
    if (this.user === true) {
      this.navbarColor = true
      this.showUser = true
      this.showLogin = false
      console.log("True bro");
      return this.navbarColor
    } else {
      this.navbarColor = false
      this.showUser = false
      this.showLogin = true
      console.log("Que ise loco soy false");
      return this.navbarColor
    }
  }
}
