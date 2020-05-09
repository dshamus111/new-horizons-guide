import { MONTH } from './Collectable.model';
import { SHADOW, Fish, FISH_LOCATION } from './Fish.model';
import { Bug } from './Bug.model';

// List all north hemisphere fishes
// Use 24 hour notation for Time

export const fish: Fish[] = [
    {
      name: 'Example fixh',
      picture: 'path/to/image/leave placeholder for now',
      available_month: [MONTH.January, MONTH.February, MONTH.March],
      caught: false,
      in_museum: false,
      price: 3.50,
      shadow: SHADOW.Large,
      location: FISH_LOCATION.Pond,
      time_start: {
        hours: 3,
        minutes: 0
      },
      time_end: {
        hours: 4,
        minutes: 0,
      }
    }
];

export const bugs: Bug[] = [

];
