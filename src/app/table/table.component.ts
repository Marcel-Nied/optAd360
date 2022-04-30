import { Component, Input, OnInit } from '@angular/core';


export interface tableOfTheOldestMans {
  firstName: string;
  lastName: string;
  age: number;
}
const ELEMENT_DATA: tableOfTheOldestMans[] = [
  {firstName: 'Adam', lastName: 'Nowak', age: 92},
  {firstName: 'Jan', lastName: 'Kowalski', age: 90},
  {firstName: 'Fluorine', lastName: 'Noskowska', age: 99},
  { firstName: 'Neon', lastName: 'Kokot', age: 89},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'age', ];
  dataSource = ELEMENT_DATA;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
