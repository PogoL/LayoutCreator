import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { TableModel } from '../table.model';

@Component({
  selector: 'app-table-displayer',
  templateUrl: './table-displayer.component.html',
  styleUrls: ['./table-displayer.component.css']
})
export class TableDisplayerComponent implements OnInit {
  
  table: TableModel = new TableModel(4,5);
  selectedCells: {idWidth: number, idHeight: number}[] = [];

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toggleSelectCell(idH: number, idW: number, event) {
    let idSelected = this.selectedCells.findIndex(c => c.idHeight == idH && c.idWidth == idW);
    if (idSelected != -1) {
      this.selectedCells.splice(idSelected,1);
    } else {
      this.selectedCells.push({idHeight: idH, idWidth: idW});
    }
    console.table(this.selectedCells);
    this.toggleClass(event);
  }

  toggleClass(event): void {
    const hasClass = event.target.classList.contains('selected-cell');
    if(hasClass) {
      this.renderer.removeClass(event.target, 'selected-cell');
    } else {
      this.renderer.addClass(event.target, 'selected-cell');
    }
  }
}
