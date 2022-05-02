import { Component, Input } from '@angular/core';

export interface TableOfTheOldestMen {
  firstName: string;
  lastName: string;
  age: number;
}

const ELEMENT_DATA: TableOfTheOldestMen[] = [
  {firstName: 'Adam', lastName: 'Nowak', age: 92},
  {firstName: 'Jan', lastName: 'Kowalski', age: 90},
  {firstName: 'Fluorine', lastName: 'Noskowska', age: 99},
  {firstName: 'Neon', lastName: 'Kokot', age: 89},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{
  displayedColumns: string[] = ['firstName', 'lastName', 'age', ];

  @Input() users: any;
}