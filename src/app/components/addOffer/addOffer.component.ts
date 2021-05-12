import { Component, OnInit } from '@angular/core';
import { jobOffer } from 'src/app/models/jobOffer.model';

@Component({
  selector: 'app-addOffer',
  templateUrl: './addOffer.component.html',
  styleUrls: ['./addOffer.component.scss']
})
export class AddOfferComponent implements OnInit {

  jobOffer:jobOffer =new jobOffer()
  textButton = "Guardar"
  constructor() { }

  ngOnInit() {
  }

}
