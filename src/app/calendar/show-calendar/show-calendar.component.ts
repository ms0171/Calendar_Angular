import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-calendar',
  templateUrl: './show-calendar.component.html',
  styleUrls: ['./show-calendar.component.css']
})
export class ShowCalendarComponent implements OnInit {

  id:number
  calendarOptions: Options;
  displayEvent: any;
  events = null;
  modify = false;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  start: any;
  end: any;
  title: any;
  constructor(protected eventService: EventService,private router : Router) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data =>{
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        timezone: "UTC",
        selectable: true,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'year,month,agendaWeek,agendaDay,listMonth'
        },
        events: data
      };
    });
  }

  add(){
    this.router.navigate(["/calendar/create"]);
  }

  loadevents() {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });
  }
  clickButton(model: any) {
    this.displayEvent = model;
  }
  dayClick(model: any) {
    console.log(model);
  }
  eventClick(model: any) {
    model = {
      events: {
        id: model.event.id,  //gives Id of the event
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay,
        // other params
      },
    }
    this.id=model.events.id;
    this.start = model.events.start;
    this.end = model.events.end;
    this.title = model.events.title;
    this.modify = (!this.modify);
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }

  update(){
  // console.log(this.id);
   let id = this.id;
   this.router.navigate(["/calendar/update",id]);
  }

  delete(){
    let id = this.id;
    this.router.navigate(["/calendar/delete",id]);
  }

}
