import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseWorkerComponent } from './components/case-worker/case-worker.component';
import { ProgressNotesComponent } from './components/progress-notes/progress-notes.component';
import { TransportRequestFormComponent } from './components/transport-request-form/transport-request-form.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { VeteranComponent } from './components/veteran/veteran.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import { SectionHeaderComponent } from './components/section-header/section-header.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  listPlugin,
  timeGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    CaseWorkerComponent,
    ProgressNotesComponent,
    TransportRequestFormComponent,
    CalendarComponent,
    VeteranComponent,
    SectionHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
