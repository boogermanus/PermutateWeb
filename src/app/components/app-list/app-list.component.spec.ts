import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListComponent } from './app-list.component';
import { provideHttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IApp} from '../../interfaces/iapp';

describe('AppListComponent', () => {
  let component: AppListComponent;
  let fixture: ComponentFixture<AppListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppListComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppListComponent);
    component = fixture.componentInstance;
    // this should fail, but it does not.
    // component.appList = of<IApp[]>([{id: 1, name: "test", description: "",gitHubUrl: "",appUrl:"", tags: ["test"]}]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
