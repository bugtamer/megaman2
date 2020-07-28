import { Component, Input } from '@angular/core';
import { Coordinate as xy } from 'src/app/models/coordinate.model';

@Component({
  selector: 'mm2-password-board',
  templateUrl: './password-board.component.html',
  styleUrls: ['./password-board.component.css']
})
export class PasswordBoardComponent {

  @Input()
  data: Array<xy> = [];

  get rows(): any {
    const rows = [];
    for (let x of this.rowHeader) {
      const newRow = [x];
      for (let y of this.colHeader) {
        const marker = this.getMarker(x, y);
        newRow.push(marker);
      }
      rows.push(newRow);
    }
    return rows;
  }

  // LOWER LEVEL IMPLEMENTATION DETAILS

  private getMarker(x: string, y: string): string {
    const target = `${x}${y}`;
    const wasFound = this.data.find(candidate => candidate.xy === target);
    return wasFound ? '●' : '';
  }

  private get colHeader(): Array<string> {
    return ['1', '2', '3', '4', '5'];
  }

  private get rowHeader(): Array<string> {
    return ['A', 'B', 'C', 'D', 'E'];
  }

}
