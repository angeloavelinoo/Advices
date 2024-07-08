import { Injectable } from '@angular/core';
import { api_config } from '../config/api_cofing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdviceServiceService {

  constructor(private http:HttpClient) { }

  getRandomAdivce(): Observable<any>{
    return this.http.get(`${api_config.baseUrl}/advice`)
  }
}
