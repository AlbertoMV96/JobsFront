import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
}
