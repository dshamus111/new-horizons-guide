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
  Tiny = 'Tiny', // 1
  Small = 'Small', // 2
  Medium = 'Medium', // 3
  Large = 'Large', // 4
  XLarge = 'Extra Large', // 5
  Gigantic = 'Gigantic', // 6
  Gigantic_Finned = 'Gigantic Finned',
  Large_Finned = 'Large Finned',
  Narrow = 'Narrow'
}

export enum FISH_LOCATION {
  Pond = 'Pond',
  River = 'River',
  River_Mouth = 'River Mouth',
  River_Waterfall = 'Waterfall',
  River_Cliff = 'Cliff',
  River_Cliff_or_Pond = 'Cliff/Pond',
  Sea = 'Sea',
  Pier = 'Pier'
}

export enum BUG_LOCATION {
  Flying = 'Flying',
  Rocks = 'Rocks',
  Beach = 'Beach',
  Beach_Rocks = 'Beach Rocks',
  Flowers = 'Flowers',
  Ponds_or_River = 'Pond/River',
  Rocks_or_Bushes = 'Rocks/Bushes',
  Ground = 'Ground',
  Rot_Food = 'Rotting Food',
  Stumps = 'Stumps',
  Trees = 'Trees',
  Coco_Tree = 'Coconut Trees',
  Underground = 'Underground',
  Villager = 'Villager Heads',
  Trash = 'Trash'
}

export interface Fish extends Animal {
  shadow: SHADOW;
  location: FISH_LOCATION;

}

export interface Bug extends Animal {
  location: BUG_LOCATION;
}
