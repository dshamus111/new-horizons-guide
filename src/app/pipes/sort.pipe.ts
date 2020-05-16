import { Pipe, PipeTransform } from '@angular/core';
import { Collectable } from '../models/Collectable.model';

// Pipe that filters the list by the current user's date and time

@Pipe({name: 'sort'})
export class SortPipe implements PipeTransform {

  transform(elements: Collectable[], sortBy: string, sortOrder) {

    if (!elements || elements === null || elements.length === 0) {
      return elements;
    }

    switch (sortBy) {
      case 'name':
        if (sortOrder === 'asc') {
          return elements.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
          });
        }
        if (sortOrder === 'desc') {
          return elements.sort((a, b) => {
            return a.name > b.name ? -1 : 1;
          });
        }
        break;

      case 'price':
        if (sortOrder === 'asc') {
          return elements.sort((a, b) => {
            return a.price > b.price ? 1 : -1;
          });
        }
        if (sortOrder === 'desc') {
          return elements.sort((a, b) => {
            return a.price > b.price ? -1 : 1;
          });
        }
        break;
    }
  }
}
