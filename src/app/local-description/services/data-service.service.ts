import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Local } from '../../models/localType';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = '/api/locals'; 

  constructor(private http: HttpClient) {}

  getData(param: string) {
    const url = `${this.apiUrl}/${param}`;
    return this.http.get<Local>(url);
  }
}
