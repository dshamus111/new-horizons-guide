export enum MONTH {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

export interface Collectable {
  name: string;
  available_month: MONTH[],
  picture: any; // Image or something
  caught: boolean;
  in_museum: boolean;
  price: number;
  notes?: string;
}
