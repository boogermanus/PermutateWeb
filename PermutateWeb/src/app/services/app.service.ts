import { Injectable } from '@angular/core';
import { IApp } from '../interfaces/iapp';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private readonly httpClient: HttpClient) { }

  public getApps(): Observable<IApp[]> {
    return this.httpClient.get<IApp[]>('assets/apps.json');
  }
}
