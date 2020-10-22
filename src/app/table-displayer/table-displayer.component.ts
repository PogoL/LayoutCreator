import { Component, OnInit } from '@angular/core';
import { TableModel } from '../table.model';

@Component({
  selector: 'app-table-displayer',
  templateUrl: './table-displayer.component.html',
  styleUrls: ['./table-displayer.component.css']
})
export class TableDisplayerComponent implements OnInit {
  
  table: TableModel = new TableModel(4,5);
  
  constructor() { }

  ngOnInit(): void {
    let divTable = document.getElementById("divTable");
    let table = document.createElement("table");
    for (let idH = 0; idH < this.table.height; idH++) {
      let tr = document.createElement("tr");
      for (let idW = 0; idW < this.table.width; idW++) {
        let td = document.createElement("td");
        td.setAttribute('class', 'empty-cell');
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    divTable.appendChild(table);
  }


}
