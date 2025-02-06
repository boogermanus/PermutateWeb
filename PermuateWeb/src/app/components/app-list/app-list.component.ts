import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-app-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatExpansionModule
  ],
  templateUrl: './app-list.component.html',
  styleUrl: './app-list.component.scss'
})
export class AppListComponent {

}
