import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { View } from '../models/view.model';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<View[]> {
    return this.http.get<View[]>(baseUrl);
  }

  get(id: any): Observable<View> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<View[]> {
    return this.http.get<View[]>(`${baseUrl}?title=${title}`);
  }
}
