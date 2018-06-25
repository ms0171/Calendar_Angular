			Calendar App

*)Pre Requisites
	install->npm install ng-fullcalendar --save
		 npm install calendar --save
		 npm install rxjs-compat --save
		 install->npm install -g json-server ->Local Server to access data from json file

*)App.Module.ts
	1)Include calendarroutecomponents from calendar-routing.module.ts in declarations
	2)Include CalendarAppRouterModule from calendar-routing.module.ts in imports
	3)Include EventService from event.service.ts in providers
	4)Import HttpClientModule from "@angular/common/http" and place it in imports
	5)Import RouterModule from "@angular/router" and place it in imports
	6)Import FullCalendarModule from "ng-fullcalendar" and place it in imports

*)ShowCalendar.Component.ts
	
	import { CalendarComponent } from 'ng-fullcalendar';
	import { Options } from 'fullcalendar';

	1)Options->It is a interface in fullcalendar which has all the necessary components to create a calendar
	2)CalendarComponent->It is a class which helps to perform all the events on calendar

*)Now If you are using calendar folder in other application just include the things mentioned in app.module.ts(above)

*)For routing purpose just add CalendarComponent from calendar-component and add "/calendar" as its path.