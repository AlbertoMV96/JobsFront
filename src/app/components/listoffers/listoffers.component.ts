import { Component, Input, OnInit } from '@angular/core';
import { jobOffer } from 'src/app/models/jobOffer.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-listoffers',
  templateUrl: './listoffers.component.html',
  styleUrls: ['./listoffers.component.scss']
})
export class ListoffersComponent implements OnInit {
  @Input() jobOffer:jobOffer= {};

  jobOffers =  this.sharedService.getJobOffers()

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

}
