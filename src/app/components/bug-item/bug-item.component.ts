import { Component, OnInit, Input } from '@angular/core';
import { Bug } from 'src/app/models/Animal.model';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';
import { MatDialog } from '@angular/material';
import { DataHandlerService } from 'src/app/services/data-handler.service';

@Component({
  selector: 'app-bug-item',
  templateUrl: './bug-item.component.html',
  styleUrls: ['./bug-item.component.scss']
})
export class BugItemComponent implements OnInit {

  @Input() bug: Bug;

  constructor(public dialog: MatDialog, private db: DataHandlerService) { }

  ngOnInit() {
  }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(DetailsDialogComponent, {
      data,
      panelClass: 'bug-dialog'
    });
  }

  toggleCaught() {
    this.bug.caught = !this.bug.caught;

    this.db.update('Bug', this.bug);
  }

  toggleMuseum() {
    this.bug.in_museum = !this.bug.in_museum;

    this.db.update('Bug', this.bug);
  }
}
