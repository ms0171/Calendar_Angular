import { Component } from "@angular/core";

@Component({
    selector : "app-calendar",
    template : `
        <router-outlet></router-outlet>
    `,
    styles : [``]
})

export class CalendarComponent{
    
}

@Component({
    selector: 'page-not-found',
    template: "<h2>Page Not Found</h2>",
    styles: [ ``]
  })
  export class PageNotFoundComponent{
  }