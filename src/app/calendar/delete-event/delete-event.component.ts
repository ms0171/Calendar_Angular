import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {

  id=parseInt(this.route.snapshot.paramMap.get("id"));
  event = []
  name;

  constructor(private eventService : EventService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => this.event = data);
  }

  showname() : string{
    for(let ev of this.event){
      if(this.id===ev.id){
        this.name = ev.title;
      }
    }    
    return this.name
  }

  delete(){
    this.eventService.deleteEvents(this.id).toPromise();
    this.router.navigate(["/"]);
  }

  back(){
   this.router.navigate(["/"]); 
  }

}
