import { Collectable } from './collectable.model';
import { Time } from '@angular/common';

export enum SHADOW {
  Tiny,
  Small,
  Medium,
  Large,
  Huge,
  Long,
  Finned
}

export enum FISH_LOCATION {
  Pond,
  River,
  River_Mouth,
  River_Waterfall,
  Sea,
}

export interface Fish extends Collectable {
  shadow: SHADOW;
  location: FISH_LOCATION;
  time_start: Time;
  time_end: Time;
}
