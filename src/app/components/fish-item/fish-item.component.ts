import { Component, OnInit, Input } from '@angular/core';
import { Fish } from '../../models/Animal.model';
import { MatDialog } from '@angular/material';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';

@Component({
  selector: 'app-fish-item',
  templateUrl: './fish-item.component.html',
  styleUrls: ['./fish-item.component.scss']
})
export class FishItemComponent implements OnInit {

  @Input() fish: Fish;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

  print(str) {
    console.log(str);
  }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(DetailsDialogComponent, {
      data,
      panelClass: 'fish-dialog'
    });
  }

}
