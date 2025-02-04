import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-node',
  imports: [CommonModule],
  template: `
    <div>
      <ng-container *ngIf="subtreeDepth > 0; else staticNode">
        @for (_ of arr(branchingFactor).fill(null); track $index) {
        <app-node
          [branchingFactor]="branchingFactor"
          [subtreeDepth]="subtreeDepth - 1"
          [prop]="prop"
        >
        </app-node>
        }
      </ng-container>
      <ng-template #staticNode>
        <div>
          {{ prop }}
        </div>
        <div>
          {{ count }}
          <button class="btn-increment-node" (click)="increment()">+</button>
        </div>
        <span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>
        <span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>
        <span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>
        <span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>
        <span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>
      </ng-template>
    </div>
  `,
})
export class NodeComponent {
  @Input() subtreeDepth!: number;
  @Input() branchingFactor!: number;
  @Input() prop!: number;
  arr = Array;
  count = 0;
  increment = () => this.count++;
}

@Component({
  selector: 'app-scenario-5',
  imports: [NodeComponent, FormsModule],
  template: `
    <div>
      <label>Select branching factor</label>
      <input type="number" [(ngModel)]="n" />
      <label>tree depth</label>
      <input type="number" [(ngModel)]="m" />
      <button (click)="generate()">Generate tree</button>
      <div>{{ count }}</div>
      <button (click)="increment()">Update root</button>
      <button (click)="updateTree()">Update entire tree</button>
      @if (initialized) {
      <div>
        @for (_ of arr(branchingFactor).fill(null); track $index) {
        <app-node
          [branchingFactor]="branchingFactor"
          [subtreeDepth]="treeDepth - 1"
          [prop]="prop"
        >
        </app-node>
        }
      </div>
      }
    </div>
  `,
})
export class Scenario5Component {
  n = 3;
  m = 3;
  branchingFactor = 3;
  treeDepth = 3;
  initialized = false;
  count = 0;
  prop = 0;
  arr = Array;

  onUpdateBranchingFactor(event: any) {
    this.branchingFactor = parseInt(event.target.value, 10);
  }

  onUpdateTreeDepth(event: any) {
    this.treeDepth = parseInt(event.target.value, 10);
  }

  generate() {
    this.initialized = true;
    this.branchingFactor = this.n;
    this.treeDepth = this.m;
  }

  increment() {
    this.count++;
  }

  updateTree() {
    this.prop++;
  }
}
