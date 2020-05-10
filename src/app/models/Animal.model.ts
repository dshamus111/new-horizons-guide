import { Collectable } from './Collectable.model';
import { Time } from '@angular/common';

export enum MONTH {
  January = 0,
  February = 1,
  March = 2,
  April = 3,
  May = 4,
  June = 5,
  July = 6,
  August = 7,
  September = 8,
  October = 9,
  November = 10,
  December = 11
}

export interface Animal extends Collectable {
  available_month: MONTH[];
  time_start: Time;
  time_end: Time;
}

export enum SHADOW {
  Tiny, // 1
  Small, // 2
  Medium, // 3
  Large, // 4
  XLarge, // 5
  Gigantic, // 6
  Gigantic_Finned,
  Large_Finned,
  Narrow
}

export enum FISH_LOCATION {
  Pond = 'Pond',
  River = 'River',
  River_Mouth = 'River Mouth',
  River_Waterfall = 'River Waterfal',
  River_Cliff = 'River Cliff',
  River_Cliff_or_Pond = 'River Cliff/Pond',
  Sea = 'Sea',
  Pier = 'Pier'
}

export interface Fish extends Animal {
  shadow: SHADOW;
  location: FISH_LOCATION;

}

export interface Bug extends Animal {
  location: any;
}
