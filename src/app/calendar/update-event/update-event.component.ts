import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  constructor(private eventService : EventService,private route : ActivatedRoute,private router : Router) { }

  event:any[] = []

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => this.event = data)
  }

  update(){
    let id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    let title = (document.getElementById("title") as HTMLInputElement).value;
    let startDate = (document.getElementById("startDate") as HTMLInputElement).value;
    let endDate = (document.getElementById("endDate") as HTMLInputElement).value;
    let startTime = (document.getElementById("startTime") as HTMLInputElement).value;
    let endTime = (document.getElementById("endTime") as HTMLInputElement).value;
    let event = {"id":id,"title":title,"start":startDate+"!"+startTime,"end":endDate+"!"+endTime}
    this.eventService.putEvents(event,id).subscribe();
  } 

  back(){
    this.router.navigate(["/"]); 
   }
}
