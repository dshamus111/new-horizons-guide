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

  hemisphere = 'north'; // placeholder
  fishList: Fish[];
  bugList: Bug[];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {

    if (this.hemisphere === 'north') {
      this.fishList = northFish;
      this.bugList = northBugs;
    }
  }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(DetailsDialogComponent, {
      data
    });
  }
}
