import {Component, OnInit} from '@angular/core';
import {Service} from "../model/service";
const SERVICES : Service[]=[
  {
    idService: "DV-1111",
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
    idService: "DV-2222",
    typeOfService: 'Room',
    area: 35,
    poolArea: 35,
    standard: 'Suite',
    floors: 1,
    capacity: 4,
    pricesService: 500,
    rentalTypes: 'Month'
  },
  {
    idService: "DV-2222",
    typeOfService: 'Room',
    area: 35,
    poolArea: 35,
    standard: 'Suite',
    floors: 1,
    capacity: 4,
    pricesService: 500,
    rentalTypes: 'Month'
  },
  {
    idService: "DV-2222",
    typeOfService: 'Room',
    area: 35,
    poolArea: 35,
    standard: 'Suite',
    floors: 1,
    capacity: 4,
    pricesService: 500,
    rentalTypes: 'Month'
  },
  {
    idService: "DV-2222",
    typeOfService: 'Room',
    area: 35,
    poolArea: 35,
    standard: 'Suite',
    floors: 1,
    capacity: 4,
    pricesService: 500,
    rentalTypes: 'Month'
  },
  {
    idService: "DV-2222",
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
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  service: Service = {};
  services: Service[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = SERVICES.length;


  constructor() {
    this.refreshServices()
  }

  ngOnInit(): void {
  }

  addNewService() {
    this.services.push(this.service);
  }

  refreshServices() {
    this.services = SERVICES
      .map((service, i) => ({id: i + 1, ...service}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
