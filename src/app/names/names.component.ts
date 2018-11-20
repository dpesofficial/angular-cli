import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
  nameList = ['name1', 'name2', 'name3'];
  constructor() { }

  ngOnInit() {
  }

}
