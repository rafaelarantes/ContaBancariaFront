import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  async post(url: string, data: any): Promise<any> {
    return this.httpClient.post<any>(environment.apiUrl + '/' + url, data).toPromise();
  }

  async get(url: string): Promise<any> {
    return this.httpClient.get<any>(environment.apiUrl + '/' + url).toPromise();
  }
}
