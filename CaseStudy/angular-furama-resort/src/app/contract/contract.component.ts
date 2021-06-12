import {Component, OnInit} from '@angular/core';
import {Contract} from "../model/contract";

const CONTRACTS: Contract[] = [
  {
    contractNumber:'HD-01',
    dateStart: '25/05/2021',
    dateEnd: '27/05/2021',
    deposit: 500,
    totalPayment: 1500,
    idCustomer: 'KH-1111',
    idEmployee: 'NV-1111',
    idService: 'DV-1111'
  }, {
    contractNumber:'HD-02',
    dateStart: '25/05/2021',
    dateEnd: '27/05/2021',
    deposit: 500,
    totalPayment: 1500,
    idCustomer: 'KH-1111',
    idEmployee: 'NV-1111',
    idService: 'DV-1111'
  }, {
    contractNumber:'HD-03',
    dateStart: '25/05/2021',
    dateEnd: '27/05/2021',
    deposit: 500,
    totalPayment: 1500,
    idCustomer: 'KH-1111',
    idEmployee: 'NV-1111',
    idService: 'DV-1111'
  }, {
    contractNumber:'HD-04',
    dateStart: '25/05/2021',
    dateEnd: '27/05/2021',
    deposit: 500,
    totalPayment: 1500,
    idCustomer: 'KH-1111',
    idEmployee: 'NV-1111',
    idService: 'DV-1111'
  }, {
    contractNumber:'HD-05',
    dateStart: '25/05/2021',
    dateEnd: '27/05/2021',
    deposit: 500,
    totalPayment: 1500,
    idCustomer: 'KH-1111',
    idEmployee: 'NV-1111',
    idService: 'DV-1111'
  }
];

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contract: Contract = {};
  contracts: Contract[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = CONTRACTS.length;
  constructor() {
    this.refreshContracts();
  }

  ngOnInit(): void {
  }

  addNewContract() {
    this.contracts.push(this.contract);
  }

  refreshContracts() {
    this.contracts = CONTRACTS
      .map((contract, i) => ({id: i + 1, ...contract}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
