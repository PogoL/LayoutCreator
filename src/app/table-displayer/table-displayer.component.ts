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

  mergeCells(): void {
    this.selectedCells.sort(
      function(a, b) {          
        if (a.idHeight === b.idHeight) {
          return a.idWidth - b.idWidth;
        }
        return a.idHeight > b.idHeight ? 1 : -1;
      });
    
    console.table(this.selectedCells);
    

    let importantCell = document.getElementById('td'+this.selectedCells[0].idHeight+this.selectedCells[0].idWidth);
    let firstCell = this.selectedCells[0];
    let lastCell = this.selectedCells[this.selectedCells.length-1];
    let rowspan = Math.abs(firstCell.idHeight-lastCell.idHeight) + 1;
    let colspan = Math.abs(firstCell.idWidth-lastCell.idWidth) + 1;
    if (rowspan > 1) {
      importantCell.setAttribute('rowspan', rowspan.toString());
    }
    if (colspan > 1) {
      importantCell.setAttribute('colspan', colspan.toString());
    }
    
    this.removeElementsByClass('selected-cell');
    this.selectedCells = [];
  }

  removeElementsByClass(className: string): void{
    var elems = document.querySelectorAll('.'+className);
    [].forEach.call(elems, function(el) {
      el.classList.remove(className);
    });
    elems.forEach((el) => {
      if (el !== elems[0]) el.remove();
    });
  }
}
