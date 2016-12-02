import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { TravelsService }       from '../travel/travels.service';
import { Travel }               from '../travel/travel';
import { Image }                from '../image-gallery/image';


@Component({
  moduleId: module.id,
  selector    :   'travel',
  templateUrl :   'travel.component.html',
})


export class TravelComponent implements OnInit {
  public travelId: string;
  public travel : Travel = new Travel ();
  public travelImages : Image[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private travelsService: TravelsService
  ) {}
  
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {     
       this.getTravel(params['id']);
    });
  }

  getTravel(id : string): void {
    this.travelsService.getTravel(id).then(t => this.travel = t);       
    this.travelsService.getImages(id).then(i => this.travelImages = i);  
  }
}