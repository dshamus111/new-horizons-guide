import { Collectable } from './collectable.model';
import { Time } from '@angular/common';

export enum SHADOW {
  Tiny, //1
  Small, //2
  Medium, //3
  Large, //4
  XLarge, //5
  Gigantic, //6
  Gigantic_Finned,
  Large_Finned,
  Narrow
}

export enum FISH_LOCATION {
  Pond,
  River,
  River_Mouth,
  River_Waterfall,
  River_Cliff,
  River_Cliff_or_Pond,
  Sea,
  Pier
}

export interface Fish extends Collectable {
  shadow: SHADOW;
  location: FISH_LOCATION;
  time_start: Time;
  time_end: Time;
}
