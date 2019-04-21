import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RecordingComponent } from './recording.component';
import { PatientComponent }     from './patient.component';


import {APP_BASE_HREF} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    RecordingComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers:  [{provide: APP_BASE_HREF, useValue: '/health-pro-zone'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
