import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  template: `
    <div>
      <span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>
      <span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>
      <span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>
      <span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>
      <span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>
      <span>{{ value }}</span>
      <span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>
      <span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>
      <span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>
      <span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>
      <span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>
    </div>
  `,
})
export class ChildComponent {
  @Input() value!: number;
}

interface Child {
  id: number;
  value: number;
}

@Component({
  selector: 'app-scenario-4',
  imports: [ChildComponent, FormsModule],
  template: `
    <div>
      <div>
        <label>Number of components</label>
        <input type="number" min="1" [(ngModel)]="numChildren" />
        <button (click)="generate()">Generate</button>
        <button (click)="update()">Update children</button>
        <button (click)="updateRandomChild()">Update single child</button>
      </div>
      @for (child of children; track child.id) {
      <app-child [value]="child.value"></app-child>
      }
    </div>
  `,
})
export class Scenario4Component {
  numChildren = 10;
  children: Child[] = [];

  generate() {
    this.children = Array(this.numChildren)
      .fill(null)
      .map((_, i) => ({ id: i, value: i }));
  }

  update() {
    this.children = this.children.map((child) => ({
      ...child,
      value: child.value + 1,
    }));
  }

  updateRandomChild() {
    if (this.children.length === 0) return;

    const i = Math.floor(Math.random() * this.children.length);
    this.children = this.children.map((child, index) => {
      if (index === i) {
        return { ...child, value: child.value + 1 };
      }
      return child;
    });
  }
}
