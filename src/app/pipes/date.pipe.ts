import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from '../models/Animal.model';

// Pipe that filters the list by the current user's date and time

@Pipe({name: 'available_date'})
export class DatePipe implements PipeTransform {

  transform(value: Animal[]): any {
    const now = new Date();

    return value.filter((element) => {

      for (const month of element.available_month) {
        if (month === now.getMonth()) {
          const hour = now.getHours();
          const minutes = now.getMinutes();
          if (hour > element.time_start.hours && hour < element.time_end.hours) {
            return 1;
          }
        }
      }
      return 0;
    });
  }
}
