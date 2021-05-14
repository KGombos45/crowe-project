import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data.json';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  orders = {} = (data as any).default;
  displayedColumns: string[] = ['orderNumber', 'created', 'totalWorkAmt', 'product', 'status'];
  dataSource = this.orders;

  constructor() { }

  ngOnInit(): void {
    console.log(this.orders);
  }

}
