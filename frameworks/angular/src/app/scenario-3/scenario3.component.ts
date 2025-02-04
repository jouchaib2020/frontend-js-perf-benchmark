import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-node',
  imports: [CommonModule],
  template: `
    <div>
      <ng-container *ngIf="subtreeDepth > 0; else staticNode">
        @for (_ of arr(branchingFactor).fill(1); track $index) {
        <app-node
          [branchingFactor]="branchingFactor"
          [subtreeDepth]="subtreeDepth - 1"
        >
        </app-node>
        }
      </ng-container>

      <ng-template #staticNode>
        <div>
          {{ count }}
          <button class="btn-increment-leaf" (click)="increment()">+</button>
        </div>
      </ng-template>
    </div>
  `,
})
export class NodeComponent {
  @Input() branchingFactor!: number;
  @Input() subtreeDepth!: number;
  count = 0;

  arr = Array;

  increment() {
    this.count++;
  }
}

@Component({
  selector: 'app-node2',
  imports: [CommonModule],
  template: `
    <div>
      <ng-container *ngIf="subtreeDepth > 0; else staticNode">
        @for (_ of arr(branchingFactor).fill(1); track $index) {
        <app-node2
          [branchingFactor]="branchingFactor"
          [subtreeDepth]="subtreeDepth - 1"
        >
        </app-node2>
        }
      </ng-container>

      <ng-template #staticNode>-</ng-template>
    </div>
  `,
})
export class Node2Component {
  @Input() branchingFactor!: number;
  @Input() subtreeDepth!: number;
  arr = Array;
}

@Component({
  selector: 'app-scenario-3',
  imports: [NodeComponent, Node2Component, FormsModule],
  template: `
    <div>
      <label>branching factor</label>
      <input type="number" [(ngModel)]="n" />
      <label>tree depth</label>
      <input type="number" [(ngModel)]="m" />
      <button (click)="generate()">Generate tree</button>
      <button (click)="generateSimple()">Generate static tree</button>
      <div>{{ count }}</div>
      <button (click)="increment()">+ root</button>
      @if (initialized) { @if (nodeType === 1) {
      <div>
        @for (_ of arr(branchingFactor).fill(1); track $index) {
        <app-node
          [branchingFactor]="branchingFactor"
          [subtreeDepth]="treeDepth - 1"
        >
        </app-node>
        }
      </div>
      }@else {
      <div>
        @for (_ of arr(branchingFactor).fill(1); track $index) {
        <app-node2
          [branchingFactor]="branchingFactor"
          [subtreeDepth]="treeDepth - 1"
        >
        </app-node2>
        }
      </div>
      } }
    </div>
  `,
})
export class Scenario3Component {
  n = 3;
  m = 3;
  branchingFactor = 3;
  treeDepth = 3;
  initialized = false;
  count = 0;
  nodeType = 1;
  arr = Array;

  generate() {
    this.initialized = true;
    this.branchingFactor = this.n;
    this.treeDepth = this.m;
  }

  generateSimple() {
    this.nodeType = 2;
    this.initialized = true;
    this.branchingFactor = this.n;
    this.treeDepth = this.m;
  }

  increment() {
    this.count++;
  }
}
