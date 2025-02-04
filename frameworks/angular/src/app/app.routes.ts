import { Routes } from '@angular/router';
import { Scenario1Component } from './scenario-1/scenario1.component';
import { Scenario2Component } from './scenario-2/scenario2.component';
import { Scenario3Component } from './scenario-3/scenario3.component';
import { Scenario4Component } from './scenario-4/scenario4.component';
import { Scenario5Component } from './scenario-5/scenario5.component';

export const routes: Routes = [
  { path: 'scenario-1', component: Scenario1Component },
  { path: 'scenario-2', component: Scenario2Component },
  { path: 'scenario-3', component: Scenario3Component },
  { path: 'scenario-4', component: Scenario4Component },
  { path: 'scenario-5', component: Scenario5Component },
  { path: '**', redirectTo: 'scenario-1' },
];
