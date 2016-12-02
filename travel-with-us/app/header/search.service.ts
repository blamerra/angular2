import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } 		from 'rxjs';

import { MenuItem }       from '../header/menu-item';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<MenuItem[]> {
    return this.http
               .get(`app/heroes/?name=${term}`)
               .map((r: Response) => r.json().data as MenuItem[]);
  }
}