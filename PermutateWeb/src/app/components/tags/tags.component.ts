import { Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [
    MatChipsModule
  ],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent {
  @Input() tags!: string[]
}
