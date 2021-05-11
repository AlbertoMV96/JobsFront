import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jobOffers =  this.sharedService.getJobOffers()

  constructor(private sharedService: SharedService) {

  }

  ngOnInit(): void {
  }

}