import { Component, OnInit, Input } from '@angular/core';
import { Fish } from '../../models/Animal.model';

@Component({
  selector: 'app-fish-item',
  templateUrl: './fish-item.component.html',
  styleUrls: ['./fish-item.component.scss']
})
export class FishItemComponent implements OnInit {

  @Input() fish: Fish;

  constructor() { }

  ngOnInit() {}

}
