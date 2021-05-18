import { Component, OnInit } from '@angular/core';
import { jobOffer } from 'src/app/models/jobOffer.model';
import { JobService } from 'src/app/services/job.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jobOffers!:jobOffer[];

  constructor(private sharedService: SharedService, private jobService: JobService) {

  }

  ngOnInit(): void {

   this.jobService.getJobs().subscribe(data=>{
    console.log(data._id);
    this.jobOffers = data
    console.log(this.jobOffers[0]._id);
   })

  }

}
