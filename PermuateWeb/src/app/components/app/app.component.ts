import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'app-app',
  standalone: true,
  imports: [
    MatExpansionModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
