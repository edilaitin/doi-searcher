import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoiService {

  constructor(private http: HttpClient) { }

  getDoiInfo(doi: string) {
    return this.http.get(`https://api.crossref.org/works/${doi}`);
  }
}