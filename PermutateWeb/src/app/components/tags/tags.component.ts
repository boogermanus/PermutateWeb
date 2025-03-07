import { Component, Input, OnInit } from '@angular/core';
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
export class TagsComponent implements OnInit {
  @Input() tags!: string[]

  ngOnInit(): void {
    this.tags = this.tags.sort();
  }
}
