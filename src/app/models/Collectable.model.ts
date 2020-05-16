export interface Collectable {
  name: string;

  picture: any; // Image or something
  caught: boolean;
  in_museum: boolean;
  price: number;
  preview_notes?: string;
  notes?: string;
  b_fact?: string;
}
