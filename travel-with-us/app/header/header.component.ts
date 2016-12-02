import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Constants }         from '../constants';

@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: 'header.component.html',
  styleUrls: [ 'header.component.css' ]
})

export class HeaderComponent {
   app_title: string;

   constructor(constants: Constants){
    this.app_title = constants.app_title;
  }  
}
