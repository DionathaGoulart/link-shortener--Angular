import { Routes } from '@angular/router';
import { UrlShortenerComponent } from './components/url-shortener/url-shortener.component';
import { UrlListComponent } from './components/url-list/url-list.component';

export const routes: Routes = [
  { path: '', component: UrlShortenerComponent },
  { path: 'lista', component: UrlListComponent }
];
