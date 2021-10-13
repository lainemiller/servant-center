import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseWorkerModule } from './case-worker/case-worker.module';
import { SharedModule } from './shared/shared.module';
import { VeteranModule } from './veteran/veteran.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    VeteranModule,
    CaseWorkerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
