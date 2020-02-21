import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppContainerModule } from './modules/app-container/app-container.module';
import { AcessoModule } from './modules/acesso/acesso.module';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppContainerModule,
    AppRoutingModule,
    BrowserModule,
    AcessoModule,
    MatSnackBarModule,
    HttpClientModule,
    MatNativeDateModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
