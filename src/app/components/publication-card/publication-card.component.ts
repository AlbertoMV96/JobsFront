import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.scss']
})
export class PublicationCardComponent implements OnInit {
  dropdown = true
  //jobOffers:  =  this.sharedService.getJobOffers()

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }

  displayList(){
    if( this.dropdown === true){
      this.dropdown = false
    }else{
      this.dropdown = true
    }

  }
}
