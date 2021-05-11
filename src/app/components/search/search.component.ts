import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  jobOffers =  this.sharedService.getJobOffers()

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }
}
