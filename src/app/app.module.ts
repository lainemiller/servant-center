import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseWorkerComponent } from './components/case-worker/case-worker.component';
import { ProgressNotesComponent } from './components/progress-notes/progress-notes.component';
import { TransportRequestFormComponent } from './components/transport-request-form/transport-request-form.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { VeteranComponent } from './components/veteran/veteran.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent,
    CaseWorkerComponent,
    ProgressNotesComponent,
    TransportRequestFormComponent,
    CalendarComponent,
    VeteranComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
