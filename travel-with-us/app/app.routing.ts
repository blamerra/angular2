import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelComponent }      from './travel/travel.component';
import { TimelineComponent } 	  from './timeline/timeline.component';

import { TestComponent }        from './test/test.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'timeline',
    pathMatch: 'full'
  },      
  {
    path: 'travel/:id',
    component: TravelComponent
  },   
  {
    path: 'timeline',
    component: TimelineComponent
  },
  {
    path: 'test',
    component: TestComponent
  }   
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);