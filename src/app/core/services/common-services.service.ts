import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {

  private navbarStatus: boolean;

  constructor(private httpClient: HttpClient) { }

  doGet(url: string, headers: HttpHeaders, params: HttpParams, responseType: string) {
    return this.httpClient.get<any>(url, {
      headers,
      params,
      observe: 'response',
    });
  }

   doPost(url: string, body: any, headers: HttpHeaders, params: HttpParams, responseType: string) {
    return this.httpClient.post<any>(url, body, {
      headers,
      params,
      observe: 'response',
    });
  }
  doDelete(url: string, headers: HttpHeaders, params: HttpParams, responseType: string) {
   return this.httpClient.delete<any>(url, {
      headers,
      params,
      observe: 'response',
    });
  }

private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
}

setNavbarStatus(isOpen) {
  this.navbarStatus = isOpen;
}

getNavbarStatus() {
  return this.navbarStatus;
}
}

