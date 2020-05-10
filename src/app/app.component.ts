import { Component, OnInit } from '@angular/core';

import {northFish} from './models/north-hemi-fish-default';
import { Fish } from './models/Animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  hemisphere = 'north'; // placeholder
  fishList: Fish[];

  ngOnInit() {

    if (this.hemisphere === 'north') {
      this.fishList = northFish;
    }
  }
}
