import { Injectable }   from '@angular/core';

import { Travel }       from '../travel/travel';
import { Image }        from '../image-gallery/image';

import { TimelineItem}  from '../timeline/timeline-item';
import { MenuItem}      from '../header/menu-item';

import { MockTravels }  from '../travel/mock-travels';

@Injectable()
export class TravelsService {

  getTravels(): Promise<Travel[]> {
    var mockTravels : MockTravels = new MockTravels();
    
    return Promise.resolve(mockTravels.getTravels());
   }

  getTravel(id : string) : Promise<Travel> {  	
  	var mockTravels : MockTravels = new MockTravels();

    return Promise.resolve(mockTravels.getTravel(id));
  }

  getImages (id : string) : Promise<Image[]> {  	
  	var mockTravels : MockTravels = new MockTravels();

    return Promise.resolve(mockTravels.getImages(id));
  }  

  getTimeline () : Promise<TimelineItem[]> {    
    var mockTravels : MockTravels = new MockTravels();

    return Promise.resolve(mockTravels.getTimeline());
  }  

  getMenuItems () : Promise<MenuItem[]> {    
    var mockTravels : MockTravels = new MockTravels();

    return Promise.resolve(mockTravels.getMenuItems());
  }    
}
//TODO refactor contructor with 
//var mockTravels : MockTravels = new MockTravels();