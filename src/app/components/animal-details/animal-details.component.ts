import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Time } from '@angular/common';
import { Fish, Bug, MONTH, SHADOW } from 'src/app/models/Animal.model';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss']
})
export class AnimalDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AnimalDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Fish | Bug) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

  formatTime(time: Time): string {
    if (time.hours === 0) {
      return '12 AM';
    }
    if (time.hours <= 12) {
      return time.hours + 'AM';
    }
    if (time.hours > 12) {
      return (time.hours - 12) + 'PM';
    }
  }

  isAvailable(month: MONTH) {
    if (this.data.available_month.indexOf(month) > -1) {
      return (this.data as Fish).shadow !== undefined ? 'lightskyblue' : 'lightgreen';
    }
    return 'white';
  }

  isFish(): boolean {
    return (this.data as Fish).shadow !== undefined;
  }

  getShadow(): SHADOW {
    return (this.data as Fish).shadow;
  }

  parseName(): string {
    if (this.isFish()) {
      return 'url(../../../assets/img/fish_real/' + this.data.name.toLowerCase().replace(/\s/g, '').replace('-', '') + '.png)';
    } else {
      return 'url(../../../assets/img/bugs_real/' + this.data.name.toLowerCase().replace(/\s/g, '').replace('-', '').replace('\'', '') + '.png)';
    }
  }
}
