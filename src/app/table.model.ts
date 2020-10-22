import { Cell } from './cell.model';

export class TableModel {
    cells: Cell[];

    constructor(public width: number, public height: number) {
        this.cells = new Array<Cell>(this.width * this.height);
        
        for (let idH = 0; idH < this.height; idH++) {
            for (let idW = 0; idW < this.width; idW++) {
                this.cells.push(new Cell(idW, idH, 1, 1));
            }
        }
    }
}