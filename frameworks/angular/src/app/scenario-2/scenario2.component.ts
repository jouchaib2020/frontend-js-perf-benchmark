import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cell',
  template: `
    <span>
      outer: {{ value }}
      <br />
      inner: {{ count }}
      <button (click)="increment()">+</button>
    </span>
  `,
})
export class CellComponent {
  @Input() value!: number;
  count = 0;

  increment() {
    this.count++;
  }
}

interface Column {
  id: string;
}

@Component({
  selector: 'app-row',
  imports: [CellComponent],
  template: `
    <div>
      <div>
        Row count: {{ count }}
        <button class="row-btn-update-children" (click)="updateRow()">
          + children
        </button>
        <button class="row-btn-update-self" (click)="onInput()">
          + parent
        </button>
      </div>
      <div style="display: flex; flex-direction: row; column-gap: 10px;">
        @for (cell of columns; track cell.id) {
        <app-cell [value]="$index + offset"></app-cell>
        }
      </div>
    </div>
  `,
})
export class RowComponent {
  @Input() columns!: Column[];
  count = 0;
  offset = 0;

  onInput() {
    this.count++;
  }

  updateRow() {
    this.offset++;
  }
}

interface Row {
  id: number;
  columns: { id: string }[];
}

@Component({
  selector: 'app-scenario-2',
  imports: [RowComponent, FormsModule],
  template: `
    <div>
      <div>
        <label>Number of rows</label>
        <input type="number" min="1" [(ngModel)]="numRows" />
        <label>Number of columns</label>
        <input type="number" min="1" [(ngModel)]="numColumns" />
        <button (click)="generate()">Generate</button>
      </div>
      <div style="display: flex; flex-direction: column; row-gap: 20px;">
        @for (row of rows; track row.id) {
        <app-row [columns]="row.columns"></app-row>
        }
      </div>
    </div>
  `,
})
export class Scenario2Component {
  numRows = 10;
  numColumns = 10;
  rows: Row[] = [];

  generate() {
    this.rows = Array(this.numRows)
      .fill(null)
      .map((_, i) => ({
        id: i,
        columns: Array(this.numColumns)
          .fill(null)
          .map((_, y) => ({
            id: `row${i}-col${y}`,
          })),
      }));
  }
}
