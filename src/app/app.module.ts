import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScNavBarComponent } from './sc-nav-bar/sc-nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ScMainBodyComponent } from './sc-main-body/sc-main-body.component';
import { ScDashboardComponent } from './sc-dashboard/sc-dashboard.component';
import { ScDashboardWidgetComponent } from './sc-dashboard-widget/sc-dashboard-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ScNavBarComponent,
    ScMainBodyComponent,
    ScDashboardComponent,
    ScDashboardWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
