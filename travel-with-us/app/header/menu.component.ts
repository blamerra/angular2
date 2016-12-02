import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { MenuItem}           from '../header/menu-item';

import { Travel }            from '../travel/travel';
import { TravelsService }    from '../travel/travels.service';

@Component({
  moduleId: module.id,
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: [ 'menu.component.css' ]  
})


export class MenuComponent implements OnInit {

  private menuItems : MenuItem [];
  private travels   : Travel [];

  constructor(
    private router: Router,
    private travelsService: TravelsService
    ) {}

  ngOnInit() {      
      this.travelsService.getTravels().then(t => this.travels = t);
      this.travelsService.getMenuItems().then(m => this.menuItems = m);
  }

  gotoHome(): void {
    this.router.navigate(['/']);
  }

  gotoRouterLink(routerLink:string): void {
    this.router.navigate([routerLink]);
  }

  gotoTest(): void {
    this.router.navigate(['/test']);
  }  

}