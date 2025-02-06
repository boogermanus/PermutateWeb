import { Injectable } from '@angular/core';
import { apps } from '../data/apps'
import { IApp } from '../interfaces/iapp';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly apps: IApp[] = apps;
  constructor(private readonly httpClient: HttpClient) { }

  public getApps(): IApp[] {
    return this.apps;
  }

  public getAppsAsync(): Observable<IApp[]> {
    return this.httpClient.get<IApp[]>('assets/apps.json');
  }
}
