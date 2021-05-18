import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  //   this.router.params.subscribe(params=>{
  //   this.jobService.getJob(params.id).subscribe(data=>{
  //     console.log(data);
  //     this.jobOffer = data
  //    })
  // })
  }

}
