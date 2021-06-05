import {Component, OnInit} from '@angular/core';
import {Service} from "../service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  service: Service = {};
  services: Service[] = [
    {
      id: "DV-1111",
      typeOfService: 'Villa',
      area: 70,
      poolArea: 35,
      standard: 'Deluxe',
      floors: 4,
      capacity: 10,
      pricesService: 1500,
      rentalTypes: 'Day'
    },
    {
      id: "DV-2222",
      typeOfService: 'Room',
      area: 35,
      poolArea: 35,
      standard: 'Suite',
      floors: 1,
      capacity: 4,
      pricesService: 500,
      rentalTypes: 'Month'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
