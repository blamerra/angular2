import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { SearchService } from '../header/search.service';
import { MenuItem }      from '../header/menu-item';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: [ 'search.component.css' ],
  providers: [SearchService]
})

export class SearchComponent {}
/*
export class SearchComponent implements OnInit {
  menuItems: Observable<MenuItem[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private searchService: SearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {  
    this.menuItems = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.searchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<MenuItem[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<MenuItem[]>([]);
      });

  }

  gotoDetail(hero: MenuItem): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
*/

