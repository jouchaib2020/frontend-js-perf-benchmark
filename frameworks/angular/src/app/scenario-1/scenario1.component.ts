import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  template: ` <div>-</div> `,
})
export class Child {}

@Component({
  selector: 'app-child2',
  template: ` <div>{{ id }}</div> `,
})
export class Child2 {
  @Input() id!: number;
}

interface ChildT {
  id: number;
}

@Component({
  selector: 'app-scenario-1',
  imports: [Child2, Child, FormsModule],
  template: `
    <div>
      <div>
        <label>Number of components or elements to create</label>
        <input type="number" min="1" [(ngModel)]="numChildren" />
        <button (click)="generateDynamic()">Generate components</button>
        <button (click)="generateStatic()">Generate static elements</button>
      </div>
      <div>
        <button (click)="remove()">Delete all components</button>
        <button (click)="addOne()">Add one component</button>
        <button (click)="switchType()">Change child component type</button>
      </div>
    </div>
    <div id="content">
      @if (childType === 1) { @for (item of children; track item.id) {
      <app-child></app-child>
      } }@else { @for (item of children; track item.id) {
      <app-child2 [id]="item.id"></app-child2>
      } } @for (item of staticElements; track $index) {
      <div>static</div>
      }
    </div>
  `,
})
export class Scenario1Component {
  numChildren = 0;
  children: ChildT[] = [];
  staticElements: any = [];
  childType = 1;

  addOne() {
    this.children.push({ id: this.children.length });
  }

  remove() {
    this.children = [];
  }

  generateDynamic() {
    this.children = Array(this.numChildren)
      .fill(null)
      .map((_, i) => ({ id: i }));
  }

  generateStatic() {
    this.staticElements = Array(this.numChildren).fill(null);
  }

  onUpdateValue(event: any) {
    this.numChildren = parseInt(event.target.value, 10);
  }

  switchType() {
    this.childType = this.childType === 1 ? 2 : 1;
  }
}
