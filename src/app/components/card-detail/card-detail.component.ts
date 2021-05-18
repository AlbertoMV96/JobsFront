import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { jobOffer } from 'src/app/models/jobOffer.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  jobOffer!: jobOffer;
  constructor(jobOffer: jobOffer) { }

  ngOnInit(): void {
    // this.router.params.subscribe(params=>{
    //   // this.jobService.getJob(params.id).subscribe(data=>{
    //   //   console.log(data);
    //   //   this.jobOffer = data
    //   //  })
    // })

  }

}
