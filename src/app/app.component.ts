import { Component, OnInit } from '@angular/core';

import {northFish} from './models/north-hemi-fish-default';
import { northBugs } from './models/north-hemi-bugs-default';
import { Fish, Bug } from './models/Animal.model';
import { MatDialog } from '@angular/material';
import { DetailsDialogComponent } from './components/details-dialog/details-dialog.component';
import { Collectable } from './models/Collectable.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  hemisphere = 'North Hemisphere'; // placeholder
  fishList: Fish[];
  bugList: Bug[];

  filter: boolean;

  constructor() {}

  ngOnInit() {
    this.filter = true;

    if (this.hemisphere === 'North Hemisphere') {
      this.fishList = northFish;
      this.bugList = northBugs;
    }
  }

  toggleHemisphere() {

  }

  toggleFilter() {
    this.filter = !this.filter;
  }

}
