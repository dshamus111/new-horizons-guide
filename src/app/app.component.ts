import { Component, OnInit, OnChanges } from '@angular/core';

import { northFish } from './models/north-hemi-fish-default';
import { northBugs } from './models/north-hemi-bugs-default';
import { Fish, Bug } from './models/Animal.model';
import { Collectable } from './models/Collectable.model';
import { SwUpdate } from '@angular/service-worker';
import { DataHandlerService } from './services/data-handler.service';
import { Observable, of, BehaviorSubject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  hemisphere = 'North Hemisphere'; // placeholder
  fishList: Fish[];
  bugList: Bug[];

  selectedTab: number;
  filter: boolean;

  update = false;

  isLoading: BehaviorSubject<boolean>;
  loadingData: Subscription;
  loadingText: string;

  constructor(private updates: SwUpdate, private db: DataHandlerService) {
    if (!this.updates.isEnabled) {
      console.log('Updates are NOT enabled');
    }
    updates.available.subscribe(event => {
      console.log('current', event.current, 'avalable', event.available);
      this.update = true;
    });

    this.isLoading = new BehaviorSubject<boolean>(false);
    this.loadingData = db.loadingText.subscribe(value => this.loadingText = value);
  }

  ngOnInit() {
    this.isLoading.next(true);
    this.filter = true;
    this.selectedTab = 0;

    this.loadingText = 'Loading...';

    this.db.initializeDB('north')
    .then(_ => {
      this.db.getAll('Fish')
      .then(list => {
        this.fishList = list;
      });

      this.db.getAll('Bugs')
        .then(list => {
          this.bugList = list;
        });
    })
    .finally(() => {
      this.loadingData.unsubscribe();
      this.loadingText = 'Starting up!';
      setTimeout( () => this.isLoading.next(false), 1000);
    });
  }

  toggleHemisphere() {

  }

  toggleFilter() {
    this.filter = !this.filter;
  }

  toggleTheme(event) {
    this.selectedTab = event.index;
  }

  displayTheme() {
    switch (this.selectedTab) {
      case(0):
        return 'lightskyblue';
      case(1):
        return 'lightgreen';
      case(2):
        return 'tan';
      case(3):
        return 'lightcoral';
    }
  }

  updateApplication() {
    this.updates.activateUpdate().then(() => location.reload());
  }

}
