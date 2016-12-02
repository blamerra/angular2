import { Component, OnInit }      from '@angular/core';

//import { TimelineItem, TimelineItemType }   from '../test/timeline-item';


@Component({
  moduleId: module.id,
  selector    :   'test',
  templateUrl :   'test.component.html',
  styleUrls   : [ 'test.component.css' ]
})


export class TestComponent implements OnInit {
	public test : TestItem;

  constructor(
  ) {}
  
  ngOnInit(): void {
		this.test  = {title: 'xxx', type : TestEnum.photo};
		//this.timelineItem  = {title: 'yyy', type : TimelineItemType.photo};
  }
  
}


export enum TestEnum {
    photo =1 ,
    video = 2,
    location = 3
}

export interface TestItem {
    title?: string;
    description?: string;   
    buttonLabel? : string;
    type?: TestEnum;    
    url?: string;
    routerLink?: any;
    date?: Date;
    dateLabel?: string;
    expanded?: boolean;
    disabled?: boolean;
    order?: number;
}


/*
export enum TimelineItemType {
    photo =1 ,
    video = 2,
    location = 3
}

export interface TimelineItem {
    title?: string;
    description?: string;   
    buttonLabel? : string;
    type?: TimelineItemType;    
    url?: string;
    routerLink?: any;
    date?: Date;
    dateLabel?: string;
    expanded?: boolean;
    disabled?: boolean;
    order?: number;
}
*/