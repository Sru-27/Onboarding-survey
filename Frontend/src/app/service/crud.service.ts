import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment.dev';
import { Info } from './info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InfoService {

  constructor(private httpClient : HttpClient) { }

  // getInfos() {
  //  let url = environment.INFO_BASE_URL+environment.INFO.GET;
  //  return this.httpClient.get(url);
  // }

  createInfo(body): Observable<Info> {
    let url = environment.INFO_BASE_URL+environment.INFO.POST;
    return this.httpClient.post<Info>(url,body);
  }

  // deleteInfo(id):Observable<Info>{
  //   let url = environment.INFO_BASE_URL+environment.INFO.DELETE;
  //   return this.httpClient.delete<Info>(url);
  // }


}
