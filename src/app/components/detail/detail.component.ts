import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {


  users = [
    {"capital": "A", "name": "Alberto"},
    {"capital": "D", "name": "Dani"},
    {"capital": "A", "name": "Adrián"},
    {"capital": "A", "name": "Andrei"},
  ]

  constructor(private router:ActivatedRoute,private jobService:JobService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
       this.jobService.getJob(params.id).subscribe(data=>{
         console.log(data);
        //this.jobOffer = data
       })
    })
  }
}
