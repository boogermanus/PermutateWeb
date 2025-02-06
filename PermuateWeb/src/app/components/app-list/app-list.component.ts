import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule} from '@angular/material/expansion';
import { AppService } from '../../services/app.service';
import { IApp } from '../../interfaces/iapp';
import { AppComponent } from '../app/app.component';

@Component({
  selector: 'app-app-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatExpansionModule,
    AppComponent
  ],
  templateUrl: './app-list.component.html',
  styleUrl: './app-list.component.scss'
})
export class AppListComponent {
  public appList: IApp[] = [];

  constructor(private readonly service: AppService) {
    this.appList = this.service.getApps();
  }
}
