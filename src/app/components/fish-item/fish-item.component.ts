import { Component, OnInit, Input } from '@angular/core';
import { Fish } from '../../models/Animal.model';
import { MatDialog } from '@angular/material';
import { AnimalDetailsComponent } from '../animal-details/animal-details.component';
import { DataHandlerService } from 'src/app/services/data-handler.service';

@Component({
  selector: 'app-fish-item',
  templateUrl: './fish-item.component.html',
  styleUrls: ['./fish-item.component.scss']
})
export class FishItemComponent implements OnInit {

  @Input() fish: Fish;

  constructor(public dialog: MatDialog, private db: DataHandlerService) { }

  ngOnInit() {}

  print(str) {
    console.log(str);
  }

  openDialog(data: Fish) {
    const dialogRef = this.dialog.open(AnimalDetailsComponent, {
      data,
      panelClass: 'fish-dialog'
    });
  }

  toggleCaught() {
    this.fish.caught = !this.fish.caught;

    this.db.update('Fish', this.fish);
  }

  toggleMuseum() {
    this.fish.in_museum = !this.fish.in_museum;

    this.db.update('Fish', this.fish);
  }

}
