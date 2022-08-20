import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any>  = [
    {
      "Id":1,
      "Name" :"Mannat",
      "Type":"House",
      "Price": 12000
    },
    {
      "Id":2,
      "Name" :"Aashiyana",
      "Type":"House",
      "Price": 22000
    },
    {
      "Id":3,
      "Name" :"White House",
      "Type":"House",
      "Price": 65000
    },
    {
      "Id":4,
      "Name" :"Hans Cottage",
      "Type":"House",
      "Price": 85000
    },
    {
      "Id":5,
      "Name" :"Macro Home",
      "Type":"House",
      "Price": 14700
    },
    {
      "Id":6,
      "Name" :"Green Villa",
      "Type":"House",
      "Price": 53000
    },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
