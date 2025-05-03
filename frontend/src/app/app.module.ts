import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UrlShortenerComponent } from './components/url-shortener/url-shortener.component';
import { UrlListComponent } from './components/url-list/url-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UrlListComponent,
    UrlShortenerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
