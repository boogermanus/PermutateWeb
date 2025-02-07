import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { IApp } from '../../interfaces/iapp';
import { TagsComponent } from "../tags/tags.component";
@Component({
  selector: 'app-app',
  standalone: true,
  imports: [
    MatExpansionModule,
    TagsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @Input() app!: IApp
  @Input() expanded!: boolean;
}
