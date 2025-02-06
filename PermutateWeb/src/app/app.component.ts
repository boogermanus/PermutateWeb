import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./components/profile/profile.component";
import { AppListComponent } from './components/app-list/app-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProfileComponent,
    AppListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Permutate Web';
}
