import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class EventService {

    url = "http://localhost:3000/events/"

    constructor(private http : HttpClient) {}

    public getEvents(): Observable<any> {
        return this.http.get<any>(this.url)
    }

    public postEvents(event): Observable<any> {
        return this.http.post<any>(this.url,event)
    }

    public putEvents(event,id): Observable<any> {
        return this.http.put<any>(this.url+id,event);
    }

    public deleteEvents(id): Observable<any> {
        return this.http.delete<any>(this.url+id)
    }
};
