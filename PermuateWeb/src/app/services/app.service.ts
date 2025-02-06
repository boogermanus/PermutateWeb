import { Injectable } from '@angular/core';
import { apps } from '../../data/apps'
import { IApp } from '../interfaces/iapp';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly apps: IApp[] = apps;
  constructor() { }

  public getApps(): IApp[] {
    return this.apps;
  }
}
