import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';


import { AppComponent }         from './app.component';
import { routing }              from './app.routing';
import { Constants }            from './constants';

import { HeaderComponent }      from './header/header.component';
import { MenuComponent }        from './header/menu.component';

import { TravelsService }       from './travel/travels.service';
import { TravelComponent }      from './travel/travel.component';

import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

import { TimelineComponent }     from './timeline/timeline.component';

//TO DELETE
import { TestComponent }                  from './test/test.component';

//import { CountriesService }     from './country/countries.service';
//import { CountryComponent }     from './country/country.component';

//import { SearchComponent }      from './header/search.component';
//import { SearchService}         from './header/search.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,

    //PrimeNG UI components
    //MegaMenuModule,

    //PrimeNG UI TEST components
    //PanelMenuModule,
    //InputTextModule, 
    //ButtonModule,
    //ConfirmDialogModule    
  ],
  declarations: [
    AppComponent,   
    HeaderComponent,
    MenuComponent,    
    TravelComponent,
    ImageGalleryComponent,
    TimelineComponent,
    //SearchComponent,
    TestComponent,
  ],
  providers: [
    Constants,    
    TravelsService,
    //SearchService,

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}