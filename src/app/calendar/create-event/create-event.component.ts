import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private eventService : EventService,private router : Router) { }

  ngOnInit() {
  }

  add(){
    let title = (document.getElementById("title") as HTMLInputElement).value;
    let startDate = (document.getElementById("startDate") as HTMLInputElement).value;
    let endDate = (document.getElementById("endDate") as HTMLInputElement).value;
    let startTime = (document.getElementById("startTime") as HTMLInputElement).value;
    let endTime = (document.getElementById("endTime") as HTMLInputElement).value;
    let event = {"title":title,"start":startDate+"!"+startTime,"end":endDate+"!"+endTime}
    this.eventService.postEvents(event).subscribe();
  }

  back(){
    this.router.navigate(["/"]); 
   }

}
