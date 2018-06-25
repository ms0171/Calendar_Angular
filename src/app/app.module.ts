import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from 'ng-fullcalendar';
import { EventService } from './calendar/event.service';
import { AppComponent } from "./app.component";
import { RouterModule } from '@angular/router';
import { CalendarAppRouterModule,calendarroutecomponents } from "./calendar/calendar-routing.module";

@NgModule({
  imports:      [ BrowserModule, FormsModule, FullCalendarModule,HttpClientModule,CalendarAppRouterModule,RouterModule ],
  declarations: [ calendarroutecomponents,AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ EventService ]
})
export class AppModule { }
