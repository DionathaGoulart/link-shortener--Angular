import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from '../models/url.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private apiUrl = `${environment.apiUrl}/api/urls`;

  constructor(private http: HttpClient) { }

  // Criar URL curta
  shortenUrl(originalUrl: string): Observable<Url> {
    return this.http.post<Url>(this.apiUrl, { originalUrl });
  }

  // Obter todas as URLs
  getUrls(): Observable<Url[]> {
    return this.http.get<Url[]>(this.apiUrl);
  }

  // Excluir URL
  deleteUrl(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
