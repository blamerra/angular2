import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';

import { TravelsService }   			from '../travel/travels.service';
import { TimelineItem}   from '../timeline/timeline-item';

@Component({
  moduleId: module.id,
  selector    :   'timeline',
  templateUrl :   'timeline.component.html',
  styleUrls   : [ 'timeline.component.css' ]
})


export class TimelineComponent implements OnInit {
  public timeline : TimelineItem[];

  constructor(
    private router: Router,    
    private dataService: TravelsService
  ) {}
  
  ngOnInit(): void {
		this.dataService.getTimeline().then(t => this.timeline = t);     
  }
  
  gotoRouterLink(routerLink:string): void {
    this.router.navigate([routerLink]);
  }  
}