import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestClientService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const reqHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    this.headers = new HttpHeaders(reqHeaders);
  }

  makeCall<T>(
    url: string,
    requestData?: any,
    responseType?: any,
    headerValues?: { [name: string]: string }
  ): Observable<T> {
    if (headerValues) {
      if (isDevMode()) {
        console.log('Header values:', headerValues);
      }
      this.setHeaderValues(headerValues);
    }

    if (isDevMode()) {
      console.log('*****MOCK REQUEST******');
      console.log('Url: ', url);
      console.log('Methos: GET');
      console.log('Request object: ', JSON.stringify(requestData));
      console.log('***********************');
      return this.get(url, responseType);
    } else {
      return this.post(url, requestData, responseType);
    }
  }

  post<T>(url: string, requestData?: any, responseType?: any): Observable<T> {
    return this.http.post<T>(url, requestData, {
      headers: this.headers,
      responseType: responseType,
    });
  }

  get<T>(url: string, responseType?: any): Observable<T> {
    return this.get<T>(url, {
      headers: this.headers,
      responseType: responseType,
    });
  }

  private setHeaderValues(headerValues?: { [name: string]: string }) {
    for (const name in headerValues) {
      if (headerValues.hasOwnProperty(name)) {
        this.headers.set(name, headerValues[name]);
      }
    }
  }
}
