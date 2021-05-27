import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataloadService {

  constructor(private http : HttpClient) { }

  loadData = ():Observable<HttpEvent<any> > => {

    return this.http.get<any>(environment.apiUrl);
    
  }
}
