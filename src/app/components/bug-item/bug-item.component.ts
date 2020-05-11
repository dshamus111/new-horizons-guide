import { Component, OnInit, Input } from '@angular/core';
import { Bug } from 'src/app/models/Animal.model';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-bug-item',
  templateUrl: './bug-item.component.html',
  styleUrls: ['./bug-item.component.scss']
})
export class BugItemComponent implements OnInit {

  @Input() bug: Bug;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(DetailsDialogComponent, {
      data
    });
  }
}
