import { Component, OnInit, Input } from '@angular/core';
import { Bug } from 'src/app/models/Animal.model';

@Component({
  selector: 'app-bug-item',
  templateUrl: './bug-item.component.html',
  styleUrls: ['./bug-item.component.scss']
})
export class BugItemComponent implements OnInit {

  @Input() bug: Bug;

  constructor() { }

  ngOnInit() {
  }

}
