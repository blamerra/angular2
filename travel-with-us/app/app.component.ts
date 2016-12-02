import { Component }        from '@angular/core';

@Component({
  selector: 'my-app',

  template: `
    <header></header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css']
})

export class AppComponent {}