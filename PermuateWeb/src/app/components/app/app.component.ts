import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { IApp } from '../../interfaces/iapp';
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
  @Input() app!: IApp
}
