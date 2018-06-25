import { RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CalendarComponent, PageNotFoundComponent } from "./calendar-component/calendar.component";
import { UpdateEventComponent } from "./update-event/update-event.component";
import { DeleteEventComponent } from "./delete-event/delete-event.component";
import { CreateEventComponent } from "./create-event/create-event.component";
import { ShowCalendarComponent } from "./show-calendar/show-calendar.component";

const routes : Routes = [
    {
        path : "",redirectTo : "/calendar/show",pathMatch:"full"
    },
    {
        path : "calendar",
        component : CalendarComponent,
        children : 
        [
            {
                path : "show",
                component : ShowCalendarComponent
            },
            {
                path  : "update/:id",
                component : UpdateEventComponent
            },
            {
                path : "delete/:id",
                component : DeleteEventComponent
            },
            {
                path : "create",
                component : CreateEventComponent
            },
        ]
    },
    {
        path : "**",
        component : PageNotFoundComponent
    }
]

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class CalendarAppRouterModule{}

export const calendarroutecomponents =
[
    CalendarComponent,
    UpdateEventComponent,
    DeleteEventComponent,
    CreateEventComponent,
    ShowCalendarComponent,
    PageNotFoundComponent
]