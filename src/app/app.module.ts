// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { POC2Component } from './poc2/poc2.component';
import { HttpClientModule } from '@angular/common/http';
import { Poc2Service } from './poc2/poc2.service';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { AngularScrollAnimationsModule } from "angular-scroll-animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';




@NgModule({
  declarations: [
    AppComponent,
    POC2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgsRevealModule,
    AngularScrollAnimationsModule,
  ],
  providers: [
    Poc2Service,
  ],
  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
