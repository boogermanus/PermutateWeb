import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, viewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { AppService } from '../../services/app.service';
import { IApp } from '../../interfaces/iapp';
import { AppComponent } from '../app/app.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-app-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatExpansionModule,
    AppComponent,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './app-list.component.html',
  styleUrl: './app-list.component.scss'
})
export class AppListComponent implements AfterViewInit {
  public appList!: Observable<IApp[]>
  public accordion = viewChild.required(MatAccordion);
  public expanded: boolean = false;
  public buttonText: string = 'Collapse All';

  constructor(
    private readonly service: AppService,
    private readonly crd: ChangeDetectorRef
  ) {
    this.appList = this.service.getAppsAsync();
  }

  ngAfterViewInit(): void {
    this.toggle();
    this.crd.detectChanges();

  }

  public toggle(): void {
    if(this.expanded) {
      this.accordion().closeAll();
    }
    else {
      this.accordion().openAll();
    }
    
    this.expanded = !this.expanded;
    this.buttonText = this.expanded ? 'Collapse All' : 'Expand All'
  }
}
